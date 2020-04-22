// application root custom element
import {tag, template} from "slim-js/Decorators";
import index from "./button.html";
import {Slim} from "slim-js";

@tag('example-button')
@template(index)
class ExampleButton extends Slim {
    //
}