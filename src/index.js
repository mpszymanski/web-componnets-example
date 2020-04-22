import { Slim } from 'slim-js'
import { tag, template, useShadow } from 'slim-js/Decorators'

// import custom elements
import './components/button/button.js'
import './components/counter/counter.js'

// Import template
import index from './index.html'

// application root custom element
@tag('example-app')
@template(index)
@useShadow(true)
class App extends Slim {
    onBeforeCreated() {
        this.buttonName = 'Increase value!'
        this.counter = 0
    }

    counterValue(value) {
        return value.toString();
    }

    increase() {
        this.counter++
    }
}