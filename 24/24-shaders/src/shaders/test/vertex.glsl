uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modeMatrix; 

attribute vec3 position;
void main() 
{
  gl_Position = projectionMatrix * viewMatrix * modeMatrix * vec4(position, 1.0);
}