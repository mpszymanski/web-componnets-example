// application root custom element
import {tag, template} from "slim-js/Decorators";
import index from "./counter.html";
import {Slim} from "slim-js";

@tag('example-counter')
@template(index)
class ExampleCounter extends Slim {
    //
}