#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
void main() {
    //像素坐标  -0.5=将中心点从左下角偏移到屏幕中心
    vec2 st = gl_FragCoord.xy / u_resolution - 0.5;

    // vec3 color = vec3(1.);
    // //到坐标中心点的距离
    // float len = length(st);
    // //判断len值  小于0.3取0 否则取1
    // float stepV = step(0.3, len);
    // //限定stepV的范围为0.0-0.75
    // stepV = clamp(stepV, 0., 0.75);
    // //圆的颜色
    // color = vec3(stepV);
    float stepV = step(0.3, length(st));
    vec3 color=vec3(clamp(stepV,0.,.75));
    
    // 模拟光照start
    // //中心点渐变 中间黑 四周白
    // float light=length(st);
    // //中心点偏移vec2(-0.12,0.12) 后的渐变 (0.5,0.5)->(0.35,0.65)  在上边圆的左上方
    // light=length(st-vec2(-0.12,0.12));
    // //调整渐变边缘
    // light=light*3.0;
    // //与圆融合
    // light=light*(1.-stepV);
    // //反转颜色 黑变白色 模拟光照
    // light=1.-light;
    float light = (1. - length(st - vec2(-0.12, 0.12)) * 3.) * (1. - stepV);
    color += light;

    // float refLight=1.-stepV;
    // refLight*=smoothstep(0.3,0.5,length(st*0.5+vec2(0.05,-0.08))*2.);
    // refLight=clamp(refLight,0.,1.)*0.5;
    // color+=refLight;

    // float shadow=smoothstep(.5,.65,length(st*vec2(.2,1.)+vec2(-.05,.22))*8.);
    // shadow+=(1.-smoothstep(.7,.05,length(st*vec2(.2,1.)+vec2(-.02,.22)))*6.)*.5;
    // shadow=clamp(shadow+(1.-stepV),.0,1.);
    // color*=shadow;
    // color=color*.8+.1;
    gl_FragColor = vec4(color, 1.0);
}