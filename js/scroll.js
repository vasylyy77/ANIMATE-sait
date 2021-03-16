


class Scroll{
    constructor(select, max){
       this.$select = document.querySelectorAll(select)
        this.max = max
        

       this.render()
    }
   
    render(){
      
        if(this.$select.length > 0){
            this.scroll()
     
            }
        }
       
   
    scroll(){
    
        this.$select.forEach((item) => {
     
        window.addEventListener('scroll',()=>{
            console.log(item.offsetTop )
             const  windowScroll = window.scrollY
             const  start = windowScroll - this.max
            const boxTop = item.offsetTop 
           
            const startAnim = boxTop - this.max

            if(  start >  boxTop   ) {
                    item.classList.add('scroll-active')
                    console.log(windowScroll)
                    console.log(boxTop )
                  }else {
                     
                        item.classList.remove('scroll-active')
                        
                    
                  }
         })

       
 })
        
        

}
}


const titleH1 = new Scroll('.our__title',700)
const titletext = new Scroll('.our__text',700)
const titlep = new Scroll('.our__p',700)






