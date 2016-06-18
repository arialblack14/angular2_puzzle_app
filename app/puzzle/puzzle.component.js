System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n    <section class=\"setup\">\n      <h2>Game Setup</h2>\n      Enter your name please:\n      <input type=\"text\" #name (keyup)=\"0\">\n    </section>\n    <section\n    [ngClass]=\"{\n      puzzle: true,\n      solved: switch1.value == switch1Number && switch2.value == switch2Number &&\n      switch3.value == switch3Number && switch4.value == switch4Number\n    }\"\n    [ngStyle]=\"{display: name.value === '' ? 'none' : 'block'}\"\n    >\n      <h2>\n        The Puzzle |\n        {{switch1.value == switch1Number && switch2.value == switch2Number &&\n        switch3.value == switch3Number && switch4.value == switch4Number ? \"SOLVED\" : \"NOT SOLVED\"}}\n      </h2>\n      <p>Welcome <span class=\"name\">{{name.value}}</span></p>\n      <br>\n      Switch1:\n      <input type=\"text\" #switch1 (keyup)=\"0\"><br>\n      Switch2:\n      <input type=\"text\" #switch2 (keyup)=\"0\"><br>\n      Switch3:\n      <input type=\"text\" #switch3 (keyup)=\"0\"><br>\n      Switch4:\n      <input type=\"text\" #switch4 (keyup)=\"0\"><br>\n    </section>\n    <h2 [hidden]=\"switch1.value != switch1Number || switch2.value != switch2Number ||\n    switch3.value != switch3Number || switch4.value != switch4Number\">Congratulations, {{name.value}}, you did it!</h2>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUNBO2dCQUFBO2dCQWNBLENBQUM7Z0JBUkMsa0NBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBRS9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO2dCQUM1RixDQUFDO2dCQWxESDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsMnZDQWdDVDtxQkFDRixDQUFDOzttQ0FBQTtnQkFnQkYsc0JBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELDZDQWNDLENBQUEiLCJmaWxlIjoicHV6emxlL3B1enpsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1wdXp6bGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzZWN0aW9uIGNsYXNzPVwic2V0dXBcIj5cbiAgICAgIDxoMj5HYW1lIFNldHVwPC9oMj5cbiAgICAgIEVudGVyIHlvdXIgbmFtZSBwbGVhc2U6XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbmFtZSAoa2V5dXApPVwiMFwiPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvblxuICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgIHB1enpsZTogdHJ1ZSxcbiAgICAgIHNvbHZlZDogc3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2gxTnVtYmVyICYmIHN3aXRjaDIudmFsdWUgPT0gc3dpdGNoMk51bWJlciAmJlxuICAgICAgc3dpdGNoMy52YWx1ZSA9PSBzd2l0Y2gzTnVtYmVyICYmIHN3aXRjaDQudmFsdWUgPT0gc3dpdGNoNE51bWJlclxuICAgIH1cIlxuICAgIFtuZ1N0eWxlXT1cIntkaXNwbGF5OiBuYW1lLnZhbHVlID09PSAnJyA/ICdub25lJyA6ICdibG9jayd9XCJcbiAgICA+XG4gICAgICA8aDI+XG4gICAgICAgIFRoZSBQdXp6bGUgfFxuICAgICAgICB7e3N3aXRjaDEudmFsdWUgPT0gc3dpdGNoMU51bWJlciAmJiBzd2l0Y2gyLnZhbHVlID09IHN3aXRjaDJOdW1iZXIgJiZcbiAgICAgICAgc3dpdGNoMy52YWx1ZSA9PSBzd2l0Y2gzTnVtYmVyICYmIHN3aXRjaDQudmFsdWUgPT0gc3dpdGNoNE51bWJlciA/IFwiU09MVkVEXCIgOiBcIk5PVCBTT0xWRURcIn19XG4gICAgICA8L2gyPlxuICAgICAgPHA+V2VsY29tZSA8c3BhbiBjbGFzcz1cIm5hbWVcIj57e25hbWUudmFsdWV9fTwvc3Bhbj48L3A+XG4gICAgICA8YnI+XG4gICAgICBTd2l0Y2gxOlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDEgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICBTd2l0Y2gyOlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDIgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICBTd2l0Y2gzOlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDMgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICBTd2l0Y2g0OlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDQgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxoMiBbaGlkZGVuXT1cInN3aXRjaDEudmFsdWUgIT0gc3dpdGNoMU51bWJlciB8fCBzd2l0Y2gyLnZhbHVlICE9IHN3aXRjaDJOdW1iZXIgfHxcbiAgICBzd2l0Y2gzLnZhbHVlICE9IHN3aXRjaDNOdW1iZXIgfHwgc3dpdGNoNC52YWx1ZSAhPSBzd2l0Y2g0TnVtYmVyXCI+Q29uZ3JhdHVsYXRpb25zLCB7e25hbWUudmFsdWV9fSwgeW91IGRpZCBpdCE8L2gyPlxuICBgXG59KVxuXG5leHBvcnQgY2xhc3MgUHV6emxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3dpdGNoMU51bWJlcjogbnVtYmVyO1xuICBzd2l0Y2gyTnVtYmVyOiBudW1iZXI7XG4gIHN3aXRjaDNOdW1iZXI6IG51bWJlcjtcbiAgc3dpdGNoNE51bWJlcjogbnVtYmVyO1xuXG4gIG5nT25Jbml0KCk6YW55IHtcbiAgICB0aGlzLnN3aXRjaDFOdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgIHRoaXMuc3dpdGNoMk51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgdGhpcy5zd2l0Y2gzTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICB0aGlzLnN3aXRjaDROdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2gxTnVtYmVyLHRoaXMuc3dpdGNoMk51bWJlciwgdGhpcy5zd2l0Y2gzTnVtYmVyLCB0aGlzLnN3aXRjaDROdW1iZXIpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
