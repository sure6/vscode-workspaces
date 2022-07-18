
export const mixin={
    methods: {
        showName(){
          alert(this.name);
        }
      },
      mounted() {
        console.log(this.x);
      },
}

export const mixin2={
    data() {
        return {
            x:10,
            y:2,
        }
    },
}