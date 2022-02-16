#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
void main() {
    //像素坐标
    vec2 st = gl_FragCoord.xy / u_resolution;

    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}