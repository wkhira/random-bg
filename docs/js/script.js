window.onload=function(){function run(){newframe(),ctx.putImageData(ripple,0,0)}function disturb(r,d){r<<=0;for(var a=(d<<=0)-riprad;a<d+riprad;a++)for(var t=r-riprad;t<r+riprad;t++)ripplemap[oldind+a*width+t]+=128}function newframe(){var r,d,a,t,o,i,e=oldind;oldind=newind,newind=e;for(var g=0,l=width,h=height,n=ripplemap,p=last_map,w=ripple.data,f=texture.data,b=half_width,c=half_height,C=0;C<h;C++)for(var s=0;s<l;s++){var S=newind+g,m=oldind+g;a=n[m-l]+n[m+l]+n[m-1]+n[m+1]>>1,a-=n[S],a-=a>>6,n[S]=a,a=1024-a,i=p[g],p[g]=a,i!=a&&(d=((C-c)*a/1024<<0)+c,(r=((s-b)*a/1024<<0)+b)>=l&&(r=l-1),r<0&&(r=0),d>=h&&(d=h-1),d<0&&(d=0),o=4*(r+d*l),w[t=4*g]=f[o],w[t+1]=f[o+1],w[t+2]=f[o+2]),++g}}var canvas=document.getElementById("portalCanvas"),ctx=canvas.getContext("2d"),width=$(window).width(),height=$(window).height(),half_width=width>>1,half_height=height>>1,size=width*(height+2)*2,delay=30,oldind=width,newind=width*(height+3),riprad=3,ripplemap=[],last_map=[],ripple,texture;with(canvas.width=width,canvas.height=height-10,ctx)grd=ctx.createRadialGradient(width/2,height/1.5,0,width/2,height/2,300),grd.addColorStop(0,"rgba(55, 151, 28, 1.000)"),grd.addColorStop(.05,"rgba(151, 246, 47, 1.000)"),grd.addColorStop(.1,"rgba(73, 230, 29, 1.000)"),grd.addColorStop(.15,"rgba(227, 255, 150, 1.000)"),grd.addColorStop(.15,"rgba(55, 151, 28, 1.000)"),grd.addColorStop(.2,"rgba(151, 246, 47, 1.000)"),grd.addColorStop(.25,"rgba(73, 230, 29, 1.000)"),grd.addColorStop(.3,"rgba(55, 151, 28, 1.000)"),grd.addColorStop(.35,"rgba(151, 246, 47, 1.000)"),grd.addColorStop(.4,"rgba(73, 230, 29, 1.000)"),grd.addColorStop(.45,"rgba(227, 255, 150, 1.000)"),grd.addColorStop(.45,"rgba(55, 151, 28, 1.000)"),grd.addColorStop(.5,"rgba(151, 246, 47, 1.000)"),grd.addColorStop(.55,"rgba(73, 230, 29, 1.000)"),grd.addColorStop(.65,"rgba(55, 151, 28, 1.000)"),grd.addColorStop(.7,"rgba(151, 246, 47, 1.000)"),grd.addColorStop(.75,"rgba(73, 230, 29, 1.000)"),grd.addColorStop(.8,"rgba(227, 255, 150, 1.000)"),grd.addColorStop(.8,"rgba(55, 151, 28, 1.000)"),grd.addColorStop(.85,"rgba(151, 246, 47, 1.000)"),grd.addColorStop(.9,"rgba(73, 230, 29, 1.000)"),grd.addColorStop(.95,"rgba(151, 246, 47, 1.000)"),grd.addColorStop(.95,"rgba(227, 255, 150, 1.000)"),grd.addColorStop(1,"rgba(0, 0, 0, 1.000)"),fillStyle=grd,setTransform(.5,0,0,1,width/4,0),fillRect(0,0,width,height);texture=ctx.getImageData(0,0,width,height),ripple=ctx.getImageData(0,0,width,height);for(var i=0;i<size;i++)last_map[i]=ripplemap[i]=0;canvas.onmousemove=function(r){disturb(r.offsetX||r.layerX,r.offsetY||r.layerY)},canvas.onclick=function(r){disturb(r.offsetX||r.layerX,r.offsetY||r.layerY)},setInterval(function(){newframe(),ctx.putImageData(ripple,0,0)},30);var rnd=Math.random;setInterval(function(){disturb(rnd()*width,rnd()*height)},100)};