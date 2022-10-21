new fullpage('#fullpage', {
	//options here
  autoScrolling:true,
  navigation:true,
  onLeave: function(origin,destination,direction){
    const section = destination.item;
    const title=section.querySelector("h1");
    const t1=new TimelineMax({delay:0.5});
    if(destination.index===0){
      const logo=section.querySelector("img");
      t1.fromTo(logo,1.5,{rotation:360,y:"30"},{rotation:0,ease: "Elastic.easeOut",y:"0"});
    }
    t1.fromTo(title,0.5,{opacity:0,scale:0,y:"30"},{opacity:1,ease: "back",scale:1,y:"0"});
    if(destination.index===1){
      const about=section.querySelector("p");
      t1.fromTo(about,0.5,{opacity:0,y:"50"},{opacity:1,y:"0" ,ease:"back"});
    }
    if(destination.index===2 || destination.index===3 || destination.index===4){
      const skills=section.querySelectorAll(".col-sm");
      t1.fromTo(skills,0.5,{y:50,scale:0,stagger:0.1},{y:0,scale:1,stagger:0.1,ease:"back"});
    }
  }
});

  // const t1=gsap.timeline()
  //
  // t1.fromTo(".name",0.5,{opacity:0,scale:0},{opacity:1,ease: "back",scale:1})
  //
  // t1.fromTo(".h1",0.5,{y:"50",opacity:0},{y:0,opacity:1})
  // .fromTo("p",0.5,{y:"50",opacity:0},{y:0,opacity:1})
