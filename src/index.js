import _ from 'Lodash';
import './styles.css';
import Display from './display.JPG';

function component(){
  const elem = document.createElement('div');

  //Lodash now imported by this script
  elem.innerHTML = "WHOLE BODY bundled from webpack";
  elem.classList.add('addedClass');

  //adding image to existing div
  const display = new Image();
  display.src = Display;

  elem.appendChild(display);

return elem;

}
document.body.appendChild(component());
