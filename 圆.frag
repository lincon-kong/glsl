#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform float u_time;
void main() {
    //方案一
    //vec2 st = gl_FragCoord.xy / u_resolution;
    //vec3 color = vec3(0.0, 0.0, 0.0);
    //float border = abs(sin(u_time) * 0.1) + 0.1;
    //if(distance(vec2(0.5, 0.5), st) > border) {
    //    color = vec3(1.0, 1.0, 1.0);
    //}
    //gl_FragColor = vec4(color, 1.0);


    //方案二
    vec2 st = gl_FragCoord.xy / u_resolution-0.5;
    //到原点的长度 左下角
    float len = length(st);
    float border = abs(sin(u_time) * 0.1) + 0.1;
    float stepV = step(border, len);
    gl_FragColor=vec4(stepV,stepV,stepV,1.0);
}