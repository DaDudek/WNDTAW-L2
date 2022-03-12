import {Component} from "react";

export default class HelloWorld extends Component<any, any>{
    render() {
        return <div>
            <p className="HelloP">Hello</p> <p className="HelloP"> World</p>
        </div>;
    }
}
