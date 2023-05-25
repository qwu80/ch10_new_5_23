let sceneCount = 0;

let StartScroll = () => {
  let controller = new ScrollMagic.Controller();

  d3fourlevels();
  updatefourlevels(75);
  // d3bands();
  d3bands2();
  bands_function();
  d3bands_0();
  d3bands_0_5();
  d3bands();
  d3bands_2();
  d3bands_3();
  d3bands_3_1();
  

  let scene_0 = new ScrollMagic.Scene({
      triggerElement: '#scene_0'
    })
    .setClassToggle('#scene_0', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 0) {
        sceneCount = 0.5;
        
        

      } else {
        sceneCount = 0;
      }
    })
    .addTo(controller);


    let scene_0_5 = new ScrollMagic.Scene({
      triggerElement: '#scene_0_5'
    })
    .setClassToggle('#scene_0_5', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 0.5) {
        sceneCount = 0.7;
        
        
      } else {
        sceneCount = 0.5;
      }
    })
    .addTo(controller);

    let scene_1 = new ScrollMagic.Scene({
      triggerElement: '#scene_1'
    })
    .setClassToggle('#scene_1', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 0.7) {
        sceneCount = 1;
        // constant_fermi = Math.round(1000*-0.28*0.026)/1000
        // console.log(constant_fermi) 
        // console.log(constant_temperature)
        constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
        // $('#zoom1').anythingZoomer({
        //   smallArea: 'small',
        //   clone: true,
        //   edge: 0,
        //   switchEvent: 'none'
        // });

        
        // reset_d3bands()
        // d3bands();
      } else {
        sceneCount = 0.7;
        // if (document.getElementById("nuclei-freeze").checked= true){
          // document.getElementById("nuclei-freeze").checked = false
          document.getElementById("volume1").value = 1
        // }
        resetGraph()
      }
    })
    .addTo(controller);


  

  let scene_2 = new ScrollMagic.Scene({
      triggerElement: '#scene_2'
    })
    .setClassToggle('#scene_2', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 1) {
        sceneCount = 2;

//  document.getElementById("nuclei-freeze").checked = false;


        // add_e("130");
        temp=270
        // constant_fermi = Math.round(1000*-0.28*0.026)/1000
        constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
       

        

          
          electron_add=0
        hole_add=0
        appearArray_s1 = []
        whiteArray_e=[]
        blackArray_h=[]
        add_e(130);
          // resetGraph()
        
      } else {
        sceneCount = 1;
        // if(document.getElementById("nuclei-freeze").checked = true){
          // document.getElementById("nuclei-freeze").checked = false
        // }
        document.getElementById("nuclei-freeze1").checked = false;

        // constant_fermi = -0.28*0.026
        electron_add=0
        hole_add=0
        appearArray_s1 = []
        whiteArray_e=[]
        blackArray_h=[]
        document.getElementById("temp1").value = 270
       
        resetGraph()

      }
    })
    .addTo(controller);

  let scene_3 = new ScrollMagic.Scene({
      triggerElement: '#scene_3'
    })
    .setClassToggle('#scene_3', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 2) {
        sceneCount = 3;
        

       

        
       
        electron_add=0
        hole_add=0
        appearArray_s1 = []
        whiteArray_e=[]
        blackArray_h=[]
        add_h(130);
        temp =270
    
      } else {
        constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
        document.getElementById("nuclei-freeze2").checked = false;
        document.getElementById("temp2").value = 270
        document.getElementById("slider1").value = 130
       
        resetGraph()
      

        sceneCount = 2;
        appearArray_s1 = []
        electron_add=0
        hole_add=0
        whiteArray_e=[]
        blackArray_h=[]

        add_e(130);
      }
    })
    .addTo(controller);



    let scene_3_end = new ScrollMagic.Scene({
      triggerElement: '#scene_3_end'
    })
    .setClassToggle('#scene_3_end', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 3) {
        sceneCount = 3.1;
        resetGraph()
        constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
       

        document.getElementById("nuclei-freeze3").checked = false;
        document.getElementById("slider3").value = 20
        // document.getElementById("add_e_text_2").value = 130
        document.getElementById("slider4").value = 130

        setTemperature(20); 
      

        electron_add=0
        hole_add=0
        appearArray_s1 = []
        whiteArray_e=[]
        blackArray_h=[]
        add_e(130);
        temp =20
       
       
        
      } else {
        sceneCount = 3;
        resetGraph()
        appearArray_s1 = []
        electron_add=0
        hole_add=0
        whiteArray_e=[]
        blackArray_h=[]
        add_h(130);
        temp =270
        document.getElementById("nuclei-freeze3").checked = false;
        document.getElementById("temp3").value = 270
        document.getElementById("slider2").value = 130
        setTemperature(270)
       
      }
    })
    .addTo(controller);

  let scene_4 = new ScrollMagic.Scene({
      triggerElement: '#scene_4'
    })
    .setClassToggle('#scene_4', 'fade-in')
    // .addIndicators({
    //   name: 'fade scene',
    //   colorTrigger: 'white',
    //   colorStart: '#FFF7AE'
    // })
    .on('start', () => {
      if (sceneCount == 3.1) {
       
        
        sceneCount = 4;
      } else {
        sceneCount = 3.1;
      }
    })
    .addTo(controller);

   

  
}