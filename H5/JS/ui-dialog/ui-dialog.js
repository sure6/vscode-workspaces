﻿﻿define(function(require, exports, module) {
	var $ = require('jquery');
	//require('skin/default/ui-dialog.css');
	//var I18n = require('i18n');

	/*
	 * 国际化
	 */
	// var switchLang = {
	// 	init: function(){
	// 		I18n.init('ui-dialog', 'ui-dialog/i18n/');
	// 	}
	// };
	
	// switchLang.init(); 

	// 对话框数组
	var _dialogs = window.top._dialogs = window.top._dialogs || [];
	var slice = Array.prototype.slice;
	
	/*
	 * 预定义对话框尺寸
	 */
	var DIALOG_SIZES = {
		'mini': {
			c: 'm-pop-mini',
			w: 432,
			h: 182
		},
		'sm': {
			c: 'm-pop-sm',
			w: 572,
			h: 316
		},
		'nm': {
			c: 'm-pop-nm',
			w: 712,
			h: 450
		},
		'lg': {
			c: 'm-pop-lg',
			w: 940,
			h: 560
		},
		'gg': {
			c: 'm-pop-gg',
			w: 1200,
			h: 660
		}
	};
	
	/*
	 * 获取对话框尺寸
	 */
	function _getSize(size, win) {
		if(size === 'full') {
			result = {
				c: 'm-pop-full',
				w: _clientWidth(win) * 0.98,
				h: _clientHeight(win) * 0.98
			}
		} else {
			result = DIALOG_SIZES[size];
		}
		if(!result) {
			result = DIALOG_SIZES['nm'];
		}
		return result;
	}
	
	/*
	 * 预定义按钮样式
	 */
	var BTN_CLASSES = {
		'btn-green': 'btn-base btn-green',
		'btn-gray': 'btn-base btn-gray',
		'btn-ok': 'u-btn u-btn-nm u-btn-bg-turquoise',
		'btn-cancel': 'u-btn u-btn-nm u-btn-bg-gray'
	};
	
	function _clientWidth(win) {
		var doc = win.document;
		return win.innerWidth || (doc.documentElement || doc.body).clientWidth;
	}
	
	function _clientHeight(win) {
		var doc = win.document;
		return win.innerHeight || (doc.documentElement || doc.body).clientHeight;
	}
	
	/**
	 * 对话框构造器
	 */
	function Dialog(options) {
		var self = this;
		self.ops = $.extend({
			title: '', // 对话框标题
			id: null, // 对话框ID，删除时可指定该ID进行删除
			size: 'nm', // 对话框尺寸，尺寸大小见上方 DIALOG_SIZES
			zIndex: 1010, // zindex
			bgClose: false, // 是否点击背景关闭对话框
			url: null, // 如果是 iframe ，传入 iframe 的 URL
			scrolling: "auto", // 如果是 iframe 可以传入是否需要滚动条
			tpl: '', // 如果是页面内 DIV，传入内容模板或 jQuery 对象
			keepTpl: false, // 是否保存模板，默认关闭时会将 tpl 从 body 中移除，若传入的是 jQuery 对象，可以将 keepTpl 设置为 true
			btns: [], // 按钮列表
			onClose: null, // 对话框关闭回调
			_closed: null // 内部关闭 hook，用于将对话框从 top._dialogs 中移除
		}, options);
		var ops = self.ops;
		self._id = ops.id || ('dialog_' + ops.zIndex);
		self._ns = '.' + self._id;
		self._init();
	}
	
	Dialog.prototype = {
		_init: function() {
			var self = this, ops = self.ops, zidx = ops.zIndex, btns = ops.btns;
			var _win = ops.url ? window.top : window;
			var _sz = _getSize(ops.size, _win);
			
			self.$bg = $('<div class="m-pop-bg"></div>').css({zIndex: zidx});
			self.$pop = $('<div class="m-pop"></div>').css({zIndex: zidx + 1}).addClass(_sz.c);
			self.$wrap = $('<div class="inner-wrap"></div>');
			var $tb = $('<h5 class="title"><span>' + (ops.title || '') + '</span><span class="close" title="关闭">×</span></h5>');
			var ch = _sz.h - 62;
			if(btns && btns.length) {
				ch = ch - 44;
			}
			var $cont = $('<div class="pop-con"></div>').css({
				height: ch
			});
			if(ops.url) {
				var ifmId = 'ifm_' + self._id;
				self.$iframe = $('<iframe id="' + ifmId + '" name="' + ifmId + 
						'" frameborder="0"></iframe>').attr({
					src: ops.url,
					width: _sz.w,
					height: ch,
					scrolling: ops.scrolling
				});
				$cont.append(self.$iframe).css('overflow-y', 'hidden');
			} else {
				var $tpl = ops.tpl;
				if($tpl instanceof $) {
					$tpl.show();
				}
				$cont.append($tpl);
			}
			
			var $btns = '';
			if(btns && btns.length) {
				$btns = $('<div class="pop-btn"></div>');
				$.each(btns, function(i, btn) {
					var cfg = $.extend({
						className: 'btn-green', // 按钮样式
						text: $.i18n.prop('btn1'), // 按钮文字
						cb: null // 按钮回调, this 指向本对话框对象
					}, btn);
					var className = BTN_CLASSES[cfg.className] || cfg.className;
					var $btn = $('<button class="f-mr10"></button>').text(cfg.text || '').addClass(className || '');
					if($.isFunction(cfg.cb)) {
						$btn.on('click.dialog', function() {
							return cfg.cb.call(self);
						});
					}
					$btns.append($btn);
				});
			}
			
			self.$wrap.append($tb).append($cont).append($btns);
			self.$pop.append(self.$wrap);
			
			$('body', _win.document).append(self.$bg).append(self.$pop);
			
			self._bindEvents();
		},
		_bindEvents: function() {
			var self = this, _ns = self._ns;
			self.$wrap.on('click' + _ns, '.close', function() {
				self.close();
			});
			if(self.ops.bgClose) {
				self.$bg.on('click' + _ns, function() {
					self.close();
				});
			}
		},
		show: function() {
			var self = this;
			self.$bg.show();
			self.$pop.show();
			return self;
		},
		hide: function() {
			var self = this;
			self.$bg.hide();
			self.$pop.hide();
			return self;
		},
		close: function() {
			var self = this, ops = self.ops, $tpl = ops.tpl, $ifm = self.$iframe;
			var _ns = self._ns;
			self.$wrap.off(_ns).remove();
			self.$bg.off(_ns).remove();
			self.$pop.remove();
			if(ops._closed) {
				ops._closed(self);
			}
			if($.isFunction(ops.onClose)) {
				ops.onClose.apply(self, arguments);
			}
			if($ifm) {
				$ifm.attr('src', '');
			} else if(ops.keepTpl && ($tpl instanceof $)) {
				$tpl.hide().appendTo($('body'));
			}
		},
		zIndex: function() {
			return this.ops.zIndex;
		}
	};
	
	function _msgTpl(msg) {
		return '<p class="confirm-msg">' + (msg || '') + '</p>'
	}
	
	var Dialogs = {
		create: function(options) {
			var ops = $.extend({}, options);
			var topDialog = _dialogs[_dialogs.length - 1];
			if(topDialog) {
				ops.zIndex = topDialog.zIndex() + 3;
			}
			ops._closed = function(dlg) {
				var idx = $.inArray(dlg, _dialogs);
				if(idx !== -1) {
					_dialogs.splice(idx, 1);
				}
			}
			var d = new Dialog(ops);
			_dialogs.push(d);
			return d;
		},
		open: function(options) {
			return this.create(options).show();
		},
		close: function(id) {
			var dlg, i, tmp;
			if(id) {
				for(i = _dialogs.length - 1; i >= 0; i--) {
					tmp = _dialogs[i];
					if(tmp && id === tmp._id) {
						dlg = tmp;
						break;
					}
				}
			} else {
				dlg = _dialogs.pop();
			}
			if(dlg) {
				dlg.close.apply(dlg, slice.call(arguments, 1));
			}
		},
		alert: function(msg) {
			var dfd = $.Deferred();
			this.open({
				title: $.i18n.prop('title1'),
				tpl: _msgTpl(msg),
				size: 'mini',
				onClose: function(){
					dfd.resolve();
				},
				btns: [{
					className: 'btn-green',
					text: $.i18n.prop('btn1'),
					cb: function() {
						this.close();
					}
				}]
			});
			return dfd.promise();
		},
		confirm: function(msg) {
			var dfd = $.Deferred();
			this.open({
				title: $.i18n.prop('title2'),
				tpl: _msgTpl(msg),
				size: 'mini',
				onClose: function(sure){
					dfd.resolve(sure);
				},
				btns: [{
					className: 'btn-green',
					text: $.i18n.prop('btn1'),
					cb: function() {
						this.close(true);
					}
				}, {
					className: 'btn-gray',
					text: $.i18n.prop('btn2'),
					cb: function() {
						this.close(false);
					}
				}]
			});
			return dfd.promise();
		},
		submit: function(id,o) {
			var dlg, i, tmp;
			if(id) {
				for(i = _dialogs.length - 1; i >= 0; i--) {
					tmp = _dialogs[i];
					if(tmp && id === tmp._id) {
						dlg = tmp;
						break;
					}
				}
			} else {
				dlg = _dialogs.pop();
			}
			if(dlg) {
				dlg.close.apply(dlg, slice.call(arguments, 1));
			}
		}
	};
	
	module.exports = Dialogs;
});