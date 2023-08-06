
if ('serviceWorker' in navigator && 'PushManager' in window) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register("./public/js/serverwork.js").then(function(reg){
            console.log("Yes, it did register service worker.");
            reg.pushManager.getSubscription().then(subscription => {
                console.log(1,subscription);
                // 如果用户没有订阅
                if (!subscription) {
                    subscribeUser(reg);
                } else {
                    console.log("You have subscribed our notification");
                }
            });
        }).catch(function(err) {
            console.log("No it didn't. This happened: ", err)
        });
    });
}


function subscribeUser(swRegistration) {
    const applicationServerPublicKey = "BGVku6zziXpu00QPsG-oL2gj-G6_0e-aqnlREBUliYMCwwUeptg28MWwkdQQba16CVK2gCNKAFBnJKANJ3qAP5o";
    const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
    swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
    })
    // 用户同意
    .then(function(subscription) {
        console.log('User is subscribed:', JSON.stringify(subscription));
        // $.post("/add-subscription.php", {subscription: JSON.stringify(subscription)}, function(result) {
        //     console.log(result);
        // });
    })
    // 用户不同意或者生成失败
    .catch(function(err) {
        console.log('Failed to subscribe the user: ', err);
    });
}

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}