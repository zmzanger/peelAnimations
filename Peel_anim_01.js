(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB7ATQgGgHAAgLQAAgLAGgIQAGgGAKAAQAKAAAGAFQAFAHAAAJIAAAGIggAAQAAAGADAEQAEAEAGAAIAIgBIAIgCIAAAIIgHACIgJABQgLAAgHgGgACDgNQgDAEAAAFIAWAAQAAgGgDgDQgDgDgFAAQgFAAgDADgAAYAWQgEgDgDgGQgEgFAAgIQABgLAGgHQAGgGALAAQAKAAAHAGQAFAIAAAKQAAAMgFAHQgGAGgLAAQgHAAgGgDgAAbgMQgDAFAAAHQAAAQANAAQAMAAAAgQQAAgQgMAAQgHAAgDAEgAh1ATQgGgHAAgLQAAgLAGgIQAFgGALAAQAKAAAFAFQAGAGAAAKIAAAGIghAAQAAAGAFAEQACAEAIAAIAIgBIAHgCIAAAIIgHACIgJABQgLAAgHgGgAhtgNQgCADgCAGIAXAAQAAgGgDgDQgDgDgFAAQgFAAgDADgABTAYIgTgvIALAAIANAmIABAAQAAgCADgJIAJgbIALAAIgSAvgAgHAYIAAgcQAAgFgCgEQgCgDgFAAQgGAAgCAEQgDAEAAAHIAAAZIgLAAIAAgcQAAgGgCgDQgCgDgFAAQgFAAgEAEQgCAEAAAIIAAAYIgKAAIAAgvIAIAAIABAGIAAAAQACgDAFgCQAEgCAEAAQAMAAADAIIAAAAQADgEADgCQAEgCAFAAQAKAAADAEQADAEAAAKIAAAegAifAYIAAgvIAIAAIABAIIABAAQADgEADgCQADgDAGAAIAEAAIgBAKIgEAAQgGAAgEADQgEAFAAAGIAAAYg");
	this.shape.setTransform(-187.6801,-77.3872,0.8975,0.8975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiTBGQgcAAgVgVQgUgUgBgdQABgcAUgVQAVgUAcAAIEnAAQAcAAAVAUQAUAVABAcQgBAdgUAUQgVAVgcAAg");
	this.shape_1.setTransform(-187.4558,-77.9257,0.8975,0.8975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAEDEF").s().p("AmnC0QghAAgXgXQgYgXAAgiIAAjHQAAghAYgYQAXgXAhAAINPAAQAhAAAXAXQAYAYAAAhIAADHQAAAigYAXQgXAXghAAg");
	this.shape_2.setTransform(149.2272,-56.3863,0.8975,0.8975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#16191C").s().p("AA6AsQgIgKAAgTQAAgRAIgLQAIgKAPAAQAPAAAIALIABAAIgBgKIAAgfIAMAAIAABpIgKAAIgBgKIgBAAQgHAMgQAAQgPAAgIgKgABDgFQgFAGAAAOQAAAPAFAHQAFAHAKAAQAMAAAFgGQAFgGAAgOIAAgDQAAgPgFgGQgFgHgMAAQgKAAgFAIgAhsAwQgHgGAAgKQAAgXAlgBIAMAAIAAgFQAAgIgDgEQgEgEgIAAQgJAAgNAFIgDgIIAMgFQAGgCAHAAQAOAAAGAGQAHAGAAAMIAAAzIgJAAIgCgKIgBAAQgFAHgGACQgFADgJAAQgLAAgGgGgAhNAQQgNAAgHAEQgGAEAAAIQAAAGAEADQAFAEAFAAQALAAAGgGQAGgGAAgLIAAgGgAATA0IAAgwQAAgIgEgFQgEgEgJAAQgLAAgFAGQgGAHAAANIAAAnIgLAAIAAhJIAJAAIACAKIABAAQADgFAGgEQAHgDAGAAQAOAAAHAHQAHAHAAANIAAAwg");
	this.shape_3.setTransform(84.6953,-55.6907,0.8975,0.8975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EAEDEF").s().p("Al8CiQgdAAgVgWQgVgUAAgeIAAiyQAAgeAVgWQAVgUAdAAIL5AAQAdAAAVAUQAVAWAAAeIAACyQAAAegVAUQgVAWgdAAg");
	this.shape_4.setTransform(20.7,-56.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#16191C").s().p("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");
	this.shape_5.setTransform(-92.0716,-95.7406,0.8975,0.8975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#16191C").s().p("AA/AoQgIgJAAgSQAAgQAIgJQAHgKAOAAQANAAAIAKIAAAAIgBglIAPAAIAABhIgLAAIgDgJIgBAAQgGALgPAAQgMAAgIgKgABLgDQgEAFAAAMQAAALAEAHQAEAGAIAAQAJAAAFgGQADgEABgMIAAgCQAAgOgEgEQgEgGgKABQgIgBgEAHgAAYAwIAAgrQAAgGgDgEQgEgEgHAAQgKgBgDAGQgEAEAAANIAAAjIgPAAIAAhFIAMAAIACAJIABAAQADgFAFgCQAGgDAHAAQAZAAAAAZIAAAtgAgxAwIgJgZIgjAAIgJAZIgQAAIAihbIARAAIAiBbgAhRgOIgIAYIAbAAIgOgpQgCAKgDAHg");
	this.shape_6.setTransform(4.6147,14.4553,0.8974,0.8974);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#16191C").s().p("AgFAgIg0g0QgDgDAAgDQABgIAHAAQAFAAABACIAuAvIAvgvQACgCADAAQAJAAAAAIQAAAEgCACIg0A0QgEADgDAAQgDAAgCgDg");
	this.shape_7.setTransform(43.6754,14.1636,0.8974,0.8974);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EAEDEF").s().p("AlhC0QghAAgYgXQgXgYAAghIAAjHQAAgiAXgXQAYgXAhAAILDAAQAiAAAXAXQAXAXAAAiIAADHQAAAhgXAYQgXAXgiAAg");
	this.shape_8.setTransform(20.6787,13.872,0.8974,0.8974);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#16191C").s().p("ACCApQgIgKgBgRQAAgQAJgKQAJgKAOAAQAOAAAIAJQAIAIAAAOIAAAIIguAAQAAAKAGAGQAFAFAJAAIAMgBIALgEIAAAMQgEADgHABQgFABgIAAQgPAAgLgJgACOgGQgEAFgBAHIAgAAQAAgHgFgFQgDgEgIAAQgGAAgFAEgAA3ApQgJgKAAgRQAAgQAJgKQAJgKAPAAQANAAAIAJQAJAIgBAOIAAAIIguAAQAAAKAFAGQAGAFAJAAIALgBIAMgEIAAAMQgFADgGABQgFABgHAAQgQAAgLgJgABDgGQgEAFgBAHIAgAAQAAgHgEgFQgFgEgGAAQgIAAgEAEgAhpAcIAAglIgJAAIAAgHIAKgFIAGgPIAJAAIAAAQIATAAIAAALIgTAAIAAAkQAAAGACACQADADAEAAIALgCIAAALIgGACIgIABQgVAAgBgWgAiwApQgJgLAAgQQAAgQAJgKQAIgKAQAAQANAAAIAJQAJAJgBANIAAAIIgvAAQACALAEAFQAGAFAIAAIANgBIALgEIAAAMIgLAEQgGABgHAAQgQAAgKgJgAikgGQgEAFgBAHIAgAAQgBgHgEgFQgDgEgHAAQgIAAgEAEgAj3AoIgBAAIgDAJIgKAAIAAhiIAOAAIgBAmIABAAQAIgLAOAAQANAAAGAKQAIAKAAAQQAAARgIAJQgHAKgNAAQgNAAgIgKgAjygEQgEAEgBANIAAABQABANAEAFQAEAGAIAAQAJAAAEgGQAEgHAAgMQAAgXgRAAQgIAAgEAGgAD3AxIAAgrQAAgGgDgGQgDgEgHAAQgKAAgEAGQgEAFAAANIAAAjIgQAAIAAhFIAMAAIADAJIAAAAQADgFAGgDQAGgDAHAAQAaAAgBAZIAAAugAACAxIgOg4IgBAAIgPA4IgQAAIgUhFIAPAAIAJAhIAFAWIAAAAIACgKIACgJIALgkIAQAAIANA3IABAAQAAgHAFgPIAJghIAOAAIgTBFg");
	this.shape_9.setTransform(-113.1954,-55.7863,0.8974,0.8974);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#16191C").s().p("AgFAgIg0g0QgDgDAAgDQAAgDADgCQACgDADAAQAEAAACADIAuAuIAvguQACgDAEAAQADAAACADQADACAAADQAAADgDADIg0A0QgCADgEAAQgCAAgDgDg");
	this.shape_10.setTransform(-52.7311,-56.078,0.8974,0.8974);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EAEDEF").s().p("AosC0QgiAAgXgXQgXgXAAgiIAAjHQAAghAXgYQAXgXAiAAIRZAAQAhAAAYAXQAXAYAAAhIAADHQAAAigXAXQgYAXghAAg");
	this.shape_11.setTransform(-92.1283,-56.3921,0.8974,0.8974);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F6F6F6").ss(2,0,0,4).p("AMHAAI4NAA");
	this.shape_12.setTransform(137.4472,14.3348,0.8975,0.8975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F6F6F6").ss(2,0,0,4).p("AOMAAI8XAA");
	this.shape_13.setTransform(-105.9832,14.3348,0.8975,0.8975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#16191C").s().p("ACKApQgJgKAAgRQAAgRAJgJQAIgJAPAAQAOAAAIAIQAIAJAAANIAAAIIgvAAQABALAFAFQAFAFAKAAIALgBQAFAAAHgEIAAANIgLADIgNABQgRAAgJgJgACWgGQgEAEgBAJIAfAAQAAgJgEgEQgDgEgIAAQgHAAgEAEgABTAcIAAglIgJAAIAAgGIAKgGIAFgPIAJAAIAAAQIAUAAIAAALIgUAAIAAAlQAAAFADADQADACAEAAIALgBIAAALIgGACIgIAAQgWAAAAgWgAiLAuQgHgEgEgJQgEgJAAgKQAAgQAJgKQAIgJAQAAQAPAAAJAJQAJAKAAAQQAAARgJAKQgIAJgQAAQgKAAgIgEgAiHgDQgEAGAAALQAAAYASAAQASAAAAgYQAAgXgSAAQgJAAgFAGgADQAxIAAhFIAMAAIACAMIABAAQADgGAGgEQAFgDAHAAIAHAAIgBAOIgHgBQgJAAgFAGQgGAFAAAJIAAAlgAAuAxIAAhiIAPAAIAABigAAJAxIAAhFIAPAAIAABFgAgiAxIAAg6IgLAAIAAgHIALgEIAAgFQAAgMAGgGQAGgGAMAAQAJAAAFACIgDALIgKgBQgFAAgCADQgDADAAAGIAAAFIARAAIAAALIgRAAIAAA6gAjAAxIgthJIgBAAIABAEIABBFIgOAAIAAhcIASAAIAuBJIAAAAIgBhJIAOAAIAABcgAALghQgDgCAAgEQAAgEADgCQACgCAEAAQAEAAACACQACACAAAEQAAADgCADQgCACgEAAQgEAAgCgCg");
	this.shape_14.setTransform(-114.0704,84.652,0.8974,0.8974);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#16191C").s().p("AgFAgIg0g1QgDgCAAgDQAAgIAIAAQAEAAACACIAuAwIAvgwQACgCAEAAQAIAAAAAIQAAADgDACIg0A1QgBACgFABQgCAAgDgDg");
	this.shape_15.setTransform(174.6329,84.4052,0.8974,0.8974);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EAEDEF").s().p("A8qC0QghAAgYgYQgXgXAAghIAAjHQAAghAXgXQAYgYAhAAMA5VAAAQAhAAAYAYQAXAXAAAhIAADHQAAAhgXAXQgYAYghAAg");
	this.shape_16.setTransform(22.5409,84.0911,0.8974,0.8974);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#16191C").s().p("AghAzIAAgNIAagaIALgMQAFgFACgGQADgDAAgHQAAgHgEgEQgFgEgFAAQgGAAgGACIgMAIIgJgLIAJgGIALgFQAGgCAHAAQAJAAAHAEQAHADADAGQAEAGAAAIQAAAIgDAHQgDAHgGAFQgIAKgGAFIgRARIAAAAIAvAAIAAAPg");
	this.shape_17.setTransform(-187.8821,84.5399,0.8975,0.8975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#16191C").s().p("AAGAyIAAhSIgEAEIgOAMIgIgKIAcgXIANAAIAABjg");
	this.shape_18.setTransform(-188.6225,-94.888,0.8975,0.8975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207,-100.2,415,200.5);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB7ATQgGgHAAgLQAAgLAGgIQAGgGAKAAQAKAAAGAFQAFAHAAAJIAAAGIggAAQAAAGADAEQAEAEAGAAIAIgBIAIgCIAAAIIgHACIgJABQgLAAgHgGgACDgNQgDAEAAAFIAWAAQAAgGgDgDQgDgDgFAAQgFAAgDADgAAYAWQgEgDgDgGQgEgFAAgIQABgLAGgHQAGgGALAAQAKAAAHAGQAFAIAAAKQAAAMgFAHQgGAGgLAAQgHAAgGgDgAAbgMQgDAFAAAHQAAAQANAAQAMAAAAgQQAAgQgMAAQgHAAgDAEgAh1ATQgGgHAAgLQAAgLAGgIQAFgGALAAQAKAAAFAFQAGAGAAAKIAAAGIghAAQAAAGAFAEQACAEAIAAIAIgBIAHgCIAAAIIgHACIgJABQgLAAgHgGgAhtgNQgCADgCAGIAXAAQAAgGgDgDQgDgDgFAAQgFAAgDADgABTAYIgTgvIALAAIANAmIABAAQAAgCADgJIAJgbIALAAIgSAvgAgHAYIAAgcQAAgFgCgEQgCgDgFAAQgGAAgCAEQgDAEAAAHIAAAZIgLAAIAAgcQAAgGgCgDQgCgDgFAAQgFAAgEAEQgCAEAAAIIAAAYIgKAAIAAgvIAIAAIABAGIAAAAQACgDAFgCQAEgCAEAAQAMAAADAIIAAAAQADgEADgCQAEgCAFAAQAKAAADAEQADAEAAAKIAAAegAifAYIAAgvIAIAAIABAIIABAAQADgEADgCQADgDAGAAIAEAAIgBAKIgEAAQgGAAgEADQgEAFAAAGIAAAYg");
	this.shape.setTransform(-187.6801,-77.3872,0.8975,0.8975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiTBGQgcAAgVgVQgUgUgBgdQABgcAUgVQAVgUAcAAIEnAAQAcAAAVAUQAUAVABAcQgBAdgUAUQgVAVgcAAg");
	this.shape_1.setTransform(-187.4558,-77.9257,0.8975,0.8975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAEDEF").s().p("AmnC0QghAAgXgXQgYgXAAgiIAAjHQAAghAYgYQAXgXAhAAINPAAQAhAAAXAXQAYAYAAAhIAADHQAAAigYAXQgXAXghAAg");
	this.shape_2.setTransform(149.2272,-56.3863,0.8975,0.8975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#16191C").s().p("AA6AsQgIgKAAgTQAAgRAIgLQAIgKAPAAQAPAAAIALIABAAIgBgKIAAgfIAMAAIAABpIgKAAIgBgKIgBAAQgHAMgQAAQgPAAgIgKgABDgFQgFAGAAAOQAAAPAFAHQAFAHAKAAQAMAAAFgGQAFgGAAgOIAAgDQAAgPgFgGQgFgHgMAAQgKAAgFAIgAhsAwQgHgGAAgKQAAgXAlgBIAMAAIAAgFQAAgIgDgEQgEgEgIAAQgJAAgNAFIgDgIIAMgFQAGgCAHAAQAOAAAGAGQAHAGAAAMIAAAzIgJAAIgCgKIgBAAQgFAHgGACQgFADgJAAQgLAAgGgGgAhNAQQgNAAgHAEQgGAEAAAIQAAAGAEADQAFAEAFAAQALAAAGgGQAGgGAAgLIAAgGgAATA0IAAgwQAAgIgEgFQgEgEgJAAQgLAAgFAGQgGAHAAANIAAAnIgLAAIAAhJIAJAAIACAKIABAAQADgFAGgEQAHgDAGAAQAOAAAHAHQAHAHAAANIAAAwg");
	this.shape_3.setTransform(84.6953,-55.6907,0.8975,0.8975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EAEDEF").s().p("Al8CiQgdAAgVgWQgVgUAAgeIAAiyQAAgeAVgWQAVgUAdAAIL5AAQAdAAAVAUQAVAWAAAeIAACyQAAAegVAUQgVAWgdAAg");
	this.shape_4.setTransform(20.7,-56.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#16191C").s().p("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");
	this.shape_5.setTransform(-92.0716,-95.7406,0.8975,0.8975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#16191C").s().p("AA/AoQgIgJAAgSQAAgQAIgJQAHgKAOAAQANAAAIAKIAAAAIgBglIAPAAIAABhIgLAAIgDgJIgBAAQgGALgPAAQgMAAgIgKgABLgDQgEAFAAAMQAAALAEAHQAEAGAIAAQAJAAAFgGQADgEABgMIAAgCQAAgOgEgEQgEgGgKABQgIgBgEAHgAAYAwIAAgrQAAgGgDgEQgEgEgHAAQgKgBgDAGQgEAEAAANIAAAjIgPAAIAAhFIAMAAIACAJIABAAQADgFAFgCQAGgDAHAAQAZAAAAAZIAAAtgAgxAwIgJgZIgjAAIgJAZIgQAAIAihbIARAAIAiBbgAhRgOIgIAYIAbAAIgOgpQgCAKgDAHg");
	this.shape_6.setTransform(4.6147,14.4553,0.8974,0.8974);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#16191C").s().p("AgFAgIg0g0QgDgDAAgDQABgIAHAAQAFAAABACIAuAvIAvgvQACgCADAAQAJAAAAAIQAAAEgCACIg0A0QgEADgDAAQgDAAgCgDg");
	this.shape_7.setTransform(43.6754,14.1636,0.8974,0.8974);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EAEDEF").s().p("AlhC0QghAAgYgXQgXgYAAghIAAjHQAAgiAXgXQAYgXAhAAILDAAQAiAAAXAXQAXAXAAAiIAADHQAAAhgXAYQgXAXgiAAg");
	this.shape_8.setTransform(20.6787,13.872,0.8974,0.8974);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#16191C").s().p("ACCApQgIgKgBgRQAAgQAJgKQAJgKAOAAQAOAAAIAJQAIAIAAAOIAAAIIguAAQAAAKAGAGQAFAFAJAAIAMgBIALgEIAAAMQgEADgHABQgFABgIAAQgPAAgLgJgACOgGQgEAFgBAHIAgAAQAAgHgFgFQgDgEgIAAQgGAAgFAEgAA3ApQgJgKAAgRQAAgQAJgKQAJgKAPAAQANAAAIAJQAJAIgBAOIAAAIIguAAQAAAKAFAGQAGAFAJAAIALgBIAMgEIAAAMQgFADgGABQgFABgHAAQgQAAgLgJgABDgGQgEAFgBAHIAgAAQAAgHgEgFQgFgEgGAAQgIAAgEAEgAhpAcIAAglIgJAAIAAgHIAKgFIAGgPIAJAAIAAAQIATAAIAAALIgTAAIAAAkQAAAGACACQADADAEAAIALgCIAAALIgGACIgIABQgVAAgBgWgAiwApQgJgLAAgQQAAgQAJgKQAIgKAQAAQANAAAIAJQAJAJgBANIAAAIIgvAAQACALAEAFQAGAFAIAAIANgBIALgEIAAAMIgLAEQgGABgHAAQgQAAgKgJgAikgGQgEAFgBAHIAgAAQgBgHgEgFQgDgEgHAAQgIAAgEAEgAj3AoIgBAAIgDAJIgKAAIAAhiIAOAAIgBAmIABAAQAIgLAOAAQANAAAGAKQAIAKAAAQQAAARgIAJQgHAKgNAAQgNAAgIgKgAjygEQgEAEgBANIAAABQABANAEAFQAEAGAIAAQAJAAAEgGQAEgHAAgMQAAgXgRAAQgIAAgEAGgAD3AxIAAgrQAAgGgDgGQgDgEgHAAQgKAAgEAGQgEAFAAANIAAAjIgQAAIAAhFIAMAAIADAJIAAAAQADgFAGgDQAGgDAHAAQAaAAgBAZIAAAugAACAxIgOg4IgBAAIgPA4IgQAAIgUhFIAPAAIAJAhIAFAWIAAAAIACgKIACgJIALgkIAQAAIANA3IABAAQAAgHAFgPIAJghIAOAAIgTBFg");
	this.shape_9.setTransform(-113.1954,-55.7863,0.8974,0.8974);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#16191C").s().p("AgFAgIg0g0QgDgDAAgDQAAgDADgCQACgDADAAQAEAAACADIAuAuIAvguQACgDAEAAQADAAACADQADACAAADQAAADgDADIg0A0QgCADgEAAQgCAAgDgDg");
	this.shape_10.setTransform(-52.7311,-56.078,0.8974,0.8974);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EAEDEF").s().p("AosC0QgiAAgXgXQgXgXAAgiIAAjHQAAghAXgYQAXgXAiAAIRZAAQAhAAAYAXQAXAYAAAhIAADHQAAAigXAXQgYAXghAAg");
	this.shape_11.setTransform(-92.1283,-56.3921,0.8974,0.8974);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F6F6F6").ss(2,0,0,4).p("AMHAAI4NAA");
	this.shape_12.setTransform(137.4472,14.3348,0.8975,0.8975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F6F6F6").ss(2,0,0,4).p("AOMAAI8XAA");
	this.shape_13.setTransform(-105.9832,14.3348,0.8975,0.8975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#16191C").s().p("ACKApQgJgKAAgRQAAgRAJgJQAIgJAPAAQAOAAAIAIQAIAJAAANIAAAIIgvAAQABALAFAFQAFAFAKAAIALgBQAFAAAHgEIAAANIgLADIgNABQgRAAgJgJgACWgGQgEAEgBAJIAfAAQAAgJgEgEQgDgEgIAAQgHAAgEAEgABTAcIAAglIgJAAIAAgGIAKgGIAFgPIAJAAIAAAQIAUAAIAAALIgUAAIAAAlQAAAFADADQADACAEAAIALgBIAAALIgGACIgIAAQgWAAAAgWgAiLAuQgHgEgEgJQgEgJAAgKQAAgQAJgKQAIgJAQAAQAPAAAJAJQAJAKAAAQQAAARgJAKQgIAJgQAAQgKAAgIgEgAiHgDQgEAGAAALQAAAYASAAQASAAAAgYQAAgXgSAAQgJAAgFAGgADQAxIAAhFIAMAAIACAMIABAAQADgGAGgEQAFgDAHAAIAHAAIgBAOIgHgBQgJAAgFAGQgGAFAAAJIAAAlgAAuAxIAAhiIAPAAIAABigAAJAxIAAhFIAPAAIAABFgAgiAxIAAg6IgLAAIAAgHIALgEIAAgFQAAgMAGgGQAGgGAMAAQAJAAAFACIgDALIgKgBQgFAAgCADQgDADAAAGIAAAFIARAAIAAALIgRAAIAAA6gAjAAxIgthJIgBAAIABAEIABBFIgOAAIAAhcIASAAIAuBJIAAAAIgBhJIAOAAIAABcgAALghQgDgCAAgEQAAgEADgCQACgCAEAAQAEAAACACQACACAAAEQAAADgCADQgCACgEAAQgEAAgCgCg");
	this.shape_14.setTransform(-114.0704,84.652,0.8974,0.8974);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#16191C").s().p("AgFAgIg0g1QgDgCAAgDQAAgIAIAAQAEAAACACIAuAwIAvgwQACgCAEAAQAIAAAAAIQAAADgDACIg0A1QgBACgFABQgCAAgDgDg");
	this.shape_15.setTransform(174.6329,84.4052,0.8974,0.8974);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EAEDEF").s().p("A8qC0QghAAgYgYQgXgXAAghIAAjHQAAghAXgXQAYgYAhAAMA5VAAAQAhAAAYAYQAXAXAAAhIAADHQAAAhgXAXQgYAYghAAg");
	this.shape_16.setTransform(22.5409,84.0911,0.8974,0.8974);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#16191C").s().p("AghAzIAAgNIAagaIALgMQAFgFACgGQADgDAAgHQAAgHgEgEQgFgEgFAAQgGAAgGACIgMAIIgJgLIAJgGIALgFQAGgCAHAAQAJAAAHAEQAHADADAGQAEAGAAAIQAAAIgDAHQgDAHgGAFQgIAKgGAFIgRARIAAAAIAvAAIAAAPg");
	this.shape_17.setTransform(-187.8821,84.5399,0.8975,0.8975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#16191C").s().p("AAGAyIAAhSIgEAEIgOAMIgIgKIAcgXIANAAIAABjg");
	this.shape_18.setTransform(-188.6225,-94.888,0.8975,0.8975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207,-100.2,415,200.5);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhmOFQg2AAgngmQgngnAAg3IAAgBQAAgjgXgaIghgmQiWi0hgiNQhhiMg6h5QgNgdgCgeQgCgpAUgkQAVgjAngTQAngUArAEQAqAEAfAaICsCOIAAshQAAg/AtgsQAsgtBAAAIACAAQA/AAAtAtQAsAsAAA/IAAE8QAkgVAqAAIADAAQAwAAAoAcQAmAbARAsQAngcAxAAIACAAQA3AAAqAjQAqAiALA1QAlgYAtAAIACAAQA/AAAtAtQAtAsAAA/IAAEdQAAAFgCAFIgBAwQAAA1gLBMQgLBMgUBRQgaBthGBaQgTAXAAAgIAAASQAAA3gmAnQgnAmg2AAgApTglQgOAHgKAMQgPASACAZQAAANAIARQA4B2BeCIQBfCJCSCwIAfAkQAqAvAAA/IAAABQAAAYARARQARARAYAAIIGAAQAXAAARgRQARgRAAgYIAAgSQAAg4AigsQA8hMAXhgQAThMAKhIQALhHAAgxIADlXQAAgggXgXQgXgXghAAIgCAAQghAAgXAXQgXAXAAAgIAADbQAAAPgLALQgLALgPAAQgPAAgLgKQgNgMAAgRIACk6QAAghgXgXQgXgXghAAIgCAAQghAAgXAXQgXAXAAAhIAAD2QAAAQgLAKQgKALgQAAQgPAAgLgLQgLgKAAgQIAAk+QAAgggXgYQgXgXggAAIgDAAQggAAgXAXQgXAYAAAgIAAD4QAAAPgKALQgLALgPAAQgQAAgKgLQgLgLAAgPIAAq3QAAgggXgYQgYgXggAAIgCAAQghAAgXAXQgXAYAAAgIAANCQAAASgJAOQgJAOgPAHQgQAIgRgCQgQgCgOgLIjGilQgNgLgVgBIgFAAQgSAAgRAIg");
	this.shape.setTransform(-0.0114,-0.0066,0.1413,0.1415);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhlNgQgoAAgbgcQgcgbAAgoIAAgBQAAgxghgkIggglQiKinhciDQhpiXg9h+QgKgVgCgXQgDhFBBgeQBAgdAuAoIDHCkQAJAIAMgEQALgFACgMIAAtGQAAgwAighQAigiAwAAIACAAQAwAAAiAiQAiAhAAAwIAAG8QABguAgghQAigiAwAAIACAAQAwAAAiAiQAiAiAAAwIAABFQABguAhghQAigiAvAAIADAAQAwAAAiAiQAhAiAAAwIAABeQABguAhggQAigiAwAAIADAAQAvAAAiAiQAiAhAAAwIAAEdIgBAAIgCA6QAAAygKBJQgLBKgTBQQgZBmhBBTQgaAiAAAsIAAASQAAAogcAbQgcAcgnAAgAgshiIAOAAIAAgMg");
	this.shape_1.setTransform(-0.0143,-0.0066,0.1413,0.1415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-12.7,20,25.5);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhmOFQg2AAgngmQgngnAAg3IAAgBQAAgjgXgaIghgmQiWi0hgiNQhhiMg6h5QgNgdgCgeQgCgpAUgkQAVgjAngTQAngUArAEQAqAEAfAaICsCOIAAshQAAg/AtgsQAsgtBAAAIACAAQA/AAAtAtQAsAsAAA/IAAE8QAkgVAqAAIADAAQAwAAAoAcQAmAbARAsQAngcAxAAIACAAQA3AAAqAjQAqAiALA1QAlgYAtAAIACAAQA/AAAtAtQAtAsAAA/IAAEdQAAAFgCAFIgBAwQAAA1gLBMQgLBMgUBRQgaBthGBaQgTAXAAAgIAAASQAAA3gmAnQgnAmg2AAgApTglQgOAHgKAMQgPASACAZQAAANAIARQA4B2BeCIQBfCJCSCwIAfAkQAqAvAAA/IAAABQAAAYARARQARARAYAAIIGAAQAXAAARgRQARgRAAgYIAAgSQAAg4AigsQA8hMAXhgQAThMAKhIQALhHAAgxIADlXQAAgggXgXQgXgXghAAIgCAAQghAAgXAXQgXAXAAAgIAADbQAAAPgLALQgLALgPAAQgPAAgLgKQgNgMAAgRIACk6QAAghgXgXQgXgXghAAIgCAAQghAAgXAXQgXAXAAAhIAAD2QAAAQgLAKQgKALgQAAQgPAAgLgLQgLgKAAgQIAAk+QAAgggXgYQgXgXggAAIgDAAQggAAgXAXQgXAYAAAgIAAD4QAAAPgKALQgLALgPAAQgQAAgKgLQgLgLAAgPIAAq3QAAgggXgYQgYgXggAAIgCAAQghAAgXAXQgXAYAAAgIAANCQAAASgJAOQgJAOgPAHQgQAIgRgCQgQgCgOgLIjGilQgNgLgVgBIgFAAQgSAAgRAIg");
	this.shape.setTransform(-0.0114,-0.0066,0.1413,0.1415);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhlNgQgoAAgbgcQgcgbAAgoIAAgBQAAgxghgkIggglQiKinhciDQhpiXg9h+QgKgVgCgXQgDhFBBgeQBAgdAuAoIDHCkQAJAIAMgEQALgFACgMIAAtGQAAgwAighQAigiAwAAIACAAQAwAAAiAiQAiAhAAAwIAAG8QABguAgghQAigiAwAAIACAAQAwAAAiAiQAiAiAAAwIAABFQABguAhghQAigiAvAAIADAAQAwAAAiAiQAhAiAAAwIAABeQABguAhggQAigiAwAAIADAAQAvAAAiAiQAiAhAAAwIAAEdIgBAAIgCA6QAAAygKBJQgLBKgTBQQgZBmhBBTQgaAiAAAsIAAASQAAAogcAbQgcAcgnAAgAgshiIAOAAIAAgMg");
	this.shape_1.setTransform(-0.0143,-0.0066,0.1413,0.1415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-12.7,20,25.5);


(lib.textSegmentbyProduct = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBA4QgFgEgCgEIgDgKIAAgJIAAguIgJAAIgJAAIAAgPIASAAIAAgMIAAgOIAPAAIAAAaIANAAIANAAIAAAPIgaAAIAAAoIAAAJQABAGADACQACAEAGAAIAHgBIAHgDIAAAPIgIACIgJABQgJAAgFgCg");
	this.shape.setTransform(164.475,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVApQgKgGgGgKQgGgLAAgOQAAgNAGgKQAGgLAKgGQAKgFAMgBQAJAAAIADQAHADAGAGQAGAFAEAJIgQAHQgDgJgGgEQgHgEgIAAQgIAAgGADQgGAFgDAHQgEAHAAAIQAAAKAEAHQAEAHAGAEQAGAEAIAAQAJAAAHgGQAHgFAEgJIAPAGQgFAOgMAIQgLAHgPAAQgMAAgKgGg");
	this.shape_1.setTransform(156.575,18.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAqQgIgDgEgIQgEgIgBgNIAAg3IARAAIAAAxQAAAJACAGQADAGAFADQAEADAGAAQAGAAAFgEQAGgEACgGQADgHAAgHIAAgwIAQAAIAAA9IABAMIABAIIACAHIgRAAIgBgHIgBgHQgEAJgIAEQgHAEgIAAQgKAAgGgEg");
	this.shape_2.setTransform(146.6,18.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZA7QgJgGgFgKQgFgLAAgOQAAgOAFgKQAGgKAJgGQAJgFAMgBQAJABAIAEQAHAFAFAIIAAAAIAAg2IAQAAIAABjIABAMIABAJIABAHIgQAAIgBgIIgBgHIAAAAQgFAJgJAEQgIAEgIAAQgNAAgJgGgAgOgIQgGAEgEAGQgDAHAAAJQAAAKADAHQAEAHAGAEQAGAEAIAAQAHAAAGgEQAGgEAEgHQADgHAAgKQAAgJgDgHQgEgGgGgEQgGgEgHAAQgIAAgGAEg");
	this.shape_3.setTransform(135.975,16.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXApQgJgGgHgLQgFgKAAgOQAAgNAFgKQAHgLAJgFQALgHAMAAQANAAAKAHQALAFAFALQAGAKAAANQAAAOgGAKQgFALgLAGQgKAGgNAAQgMAAgLgGgAgOgbQgGAFgDAHQgEAHAAAIQAAAJAEAIQADAHAGAEQAGAEAIAAQAIAAAHgEQAGgEADgHQAEgIAAgJQAAgIgEgHQgDgHgGgFQgHgDgIAAQgIAAgGADg");
	this.shape_4.setTransform(125.65,18.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAuIAAhYIAQAAIAAAQIABAAQADgIAGgFQAGgFAKgBIAFABIAFABIAAASIgGgBIgFgBQgIAAgFADQgEADgDAGQgDAFgBAGIgBALIAAAng");
	this.shape_5.setTransform(117.65,18.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrA+IAAh8IAtAAQAHABAGACQAIACAHAEQAGAEAEAIQAEAHAAALQAAAMgEAHQgFAHgFAEQgHAFgHACIgMABIgdAAIAAARIAAAPIAAAPgAgZgVIAAAVIAZAAQAGAAAHgCQAFgDAEgFQAEgFAAgHQAAgJgEgFQgEgFgGgCQgGgCgGgBIgZAAIAAAZg");
	this.shape_6.setTransform(108.9,16.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRA+IANgiIgkhZIAMAAIAOAmIAPAlIAOglIAOgmIAMAAIgxB7g");
	this.shape_7.setTransform(94.45,20.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRA8QgJgFgFgKIAAAAIAAASIgLAAIAAh/IALAAIAAA6QAGgLAJgFQAJgFAJAAQAMAAAJAGQAJAGAGAKQAFAKAAAOQAAAOgGAKQgFALgJAFQgJAGgMAAQgKAAgJgFgAgPgMQgHAEgEAIQgFAIAAALQAAALAFAIQAEAIAHAFQAHAEAIAAQAJAAAHgEQAHgFAEgIQAEgJAAgKQAAgLgEgIQgEgIgHgEQgHgFgJAAQgIAAgHAFg");
	this.shape_8.setTransform(85.075,16.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAA4QgFgDgBgFQgCgFgBgEIAAgJIAAg0IgJAAIgJAAIAAgKIASAAIAAgMIAAgOIAJAAIAAAaIAOAAIAOAAIAAAKIgcAAIAAAYIAAAZIABAKQABAFACADQADADAGABIAHgBIAIgEIAAALIgIACIgJABQgIAAgDgCg");
	this.shape_9.setTransform(72.075,17.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAaAtIAAgxQAAgLgDgGQgDgIgGgCQgFgEgHAAQgIABgGAFQgHAEgDAHQgDAHAAAJIAAAvIgLAAIAAhXIAKAAIAAARIABAAQAFgKAIgEQAIgGAJAAQAIABAHADQAIADAEAIQAFAIAAANIAAA2g");
	this.shape_10.setTransform(64.075,18.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUApQgKgGgGgKQgGgLAAgOQAAgNAGgKQAFgLAKgGQAKgFALgBQAHAAAHACQAHACAGAFQAGAFAEAJQAEAIAAAOIAAAEIhHAAQAAAKAEAIQAEAIAIAEQAHAEAIAAQAIAAAGgDQAGgDAFgFQADgFADgGIALADQgGAOgKAHQgMAIgOAAQgMAAgJgGgAAdgHQAAgLgEgGQgFgGgGgDQgGgCgIAAQgHAAgHADQgGAEgEAGQgFAGAAAJIA6AAIAAAAg");
	this.shape_11.setTransform(54.05,18.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA4AtIAAgxQAAgLgDgHQgDgGgFgDQgGgEgGAAQgJABgGAFQgGAEgDAHQgEAHAAAJIAAAvIgJAAIAAgxQAAgLgEgHQgDgGgFgDQgFgEgHAAQgIABgHAFQgGAEgDAHQgDAHAAAJIAAAvIgLAAIAAhXIAKAAIAAARIABAAQAFgKAIgEQAIgGAJAAQAGAAAGACQAGADAFAEQADAGADAIQAGgNAJgEQAIgGAJAAQAHABAIADQAHADAEAJQAFAHAAANIAAA2g");
	this.shape_12.setTransform(41.025,18.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AACBAQgNABgLgGQgKgGgFgOIAKgEQADAJAHAGQAIAFALAAQAIAAAHgDQAGgEAFgIQAEgIAAgPIAAgLIgBAAQgFAKgIAGQgJAFgJAAQgNgBgJgFQgJgGgFgLQgGgJAAgNQABgNAFgKQAFgKAJgGQAKgGAMAAQAJAAAJAFQAIAGAGAKIAAAAIAAgTIAKAAIAABNQAAASgEALQgGAKgJAFQgIAEgLAAIgCAAgAgPgwQgHAEgEAIQgEAIgBAKQABAKAEAIQAEAHAHAFQAHAFAIAAQAJAAAHgFQAHgFAFgHQAEgIAAgKQAAgKgEgIQgFgIgHgFQgHgEgJAAQgIAAgHAFg");
	this.shape_13.setTransform(27.2,20.1273);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVApQgJgGgGgKQgFgLAAgOQAAgNAFgKQAGgLAJgGQAKgFAMgBQAGAAAHACQAHACAGAFQAHAFADAJQAEAIAAAOIAAAEIhHAAQAAAKAFAIQADAIAIAEQAHAEAJAAQAHAAAGgDQAGgDAFgFQAEgFACgGIAKADQgFAOgKAHQgMAIgOAAQgMAAgKgGgAAdgHQAAgLgFgGQgEgGgGgDQgHgCgGAAQgIAAgHADQgGAEgEAGQgFAGgBAJIA7AAIAAAAg");
	this.shape_14.setTransform(17.3,18.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPA9QgKgCgHgJQgIgIgEgNIALgEQADAJAFAHQAFAHAIADQAHADAIAAQAHAAAGgCQAHgDAEgFQAFgFAAgIQAAgJgEgEQgEgEgGgDIgMgEIgLgDIgKgEQgHgCgFgEQgFgEgEgGQgDgGAAgIQAAgLAGgIQAGgIAJgDQAJgEAJAAQAKAAAIAEQAJADAFAHQAGAHADAJIgJAEQgEgLgIgGQgJgGgLAAQgIAAgFADQgHACgDAFQgEAFgBAHQABAGADAEQADAFAEACIAIAFIAIADIAMADIALADIAKAGQAGADADAGQADAFAAAJQABALgGAIQgGAIgKAEQgKAFgLAAQgIAAgJgEg");
	this.shape_15.setTransform(7.1,16.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.textSegmentbyProduct, new cjs.Rectangle(0,0,170.1,30.3), null);


(lib.textFilterbyMetrics = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAoQgKgGgDgMIAPgEQADAHAGAFQAGADAGAAIAHgBQAEgBADgCQACgDAAgFQAAgEgCgDQgCgCgEgBIgHgDIgIgDIgLgEQgGgBgEgGQgEgFAAgJQAAgIAEgGQAFgGAHgDQAHgDAHAAQAIAAAHADQAHADAEAFQAFAFACAGIgPAGQgCgHgFgDQgEgEgHgBQgGAAgEADQgEAEAAAFQAAAFADACQADADAEACIAHADIAIACIAIACIAIAEIAGAHQACAEAAAHQAAAHgEAHQgEAGgHAEQgIADgKAAQgNAAgKgHg");
	this.shape.setTransform(128.475,12.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVApQgKgFgGgLQgGgLAAgNQAAgOAGgLQAGgKAKgGQAKgGAMAAQAJAAAIADQAHADAGAGQAGAGAEAIIgQAGQgDgIgGgEQgHgEgIgBQgIAAgGAFQgGAEgDAHQgEAHAAAIQAAAKAEAHQAEAHAGAEQAGAEAIAAQAJAAAHgFQAHgGAEgJIAPAGQgFAOgMAHQgLAIgPAAQgMAAgKgGg");
	this.shape_1.setTransform(119.775,12.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHBBIAAhYIAPAAIAABYgAgHgsQgDgEAAgFQAAgEADgDQADgEAEAAQAFAAADAEQADADAAAEQAAAFgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_2.setTransform(112.675,10.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAuIAAhYIAQAAIAAAQIABAAQADgIAGgFQAGgFAKgBIAFABIAFABIAAASIgGgBIgFgBQgIAAgFADQgEADgDAGQgDAFgBAGIgBALIAAAng");
	this.shape_3.setTransform(107.75,12.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBA3QgFgDgCgFIgDgKIAAgJIAAgtIgJAAIgJAAIAAgPIASAAIAAgMIAAgOIAPAAIAAAaIANAAIANAAIAAAPIgaAAIAAAoIAAAKQABAEADADQACAEAGAAIAHgBIAHgDIAAAPIgIACIgJABQgJAAgFgDg");
	this.shape_4.setTransform(100.475,11.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUApQgLgFgFgLQgGgLAAgNQAAgOAFgKQAGgKAKgHQAKgFAMgBQAHAAAHADQAIACAGAGQAGAFAEAIQADAJAAANIAAAEIhEAAQABAJAEAHQADAGAHADQAGAEAHgBQAJAAAHgEQAHgGADgIIAPAGQgFANgLAGQgKAIgPAAQgMAAgKgGgAAagHQgBgJgEgGQgDgFgGgDQgFgCgHAAQgJABgHAGQgHAHgCALIAzAAIAAAAg");
	this.shape_5.setTransform(92.375,12.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAxA/IAAhcIgBAAIgUAuIgVAuIgNAAIgUguIgVguIgBAAIAABcIgRAAIAAh8IAWAAIAVAxIAWAxIAWgxIAXgxIAVAAIAAB8g");
	this.shape_6.setTransform(79.3,10.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUA+IANghIgjhaIASAAIAMAiIANAjIAMgjIAOgiIAQAAIguB7g");
	this.shape_7.setTransform(62.65,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOA9QgIgFgFgIIAAAAIAAAPIgQAAIAAh/IAQAAIAAA3QAGgKAIgEQAJgFAIAAQAMABAJAGQAJAGAFAKQAFAKAAANQAAAPgGAKQgFALgKAGQgJAFgLAAQgJAAgIgEgAgNgIQgGAEgEAGQgDAHgBAKQABAJADAHQAEAHAGAEQAGAEAHAAQAIAAAGgEQAGgEADgHQAEgHAAgKQAAgJgEgHQgDgGgGgEQgGgEgIAAQgHAAgGAEg");
	this.shape_8.setTransform(53.1,10.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaAuIAAhYIARAAIAAAQIAAAAQADgIAHgFQAHgFAJgBIAFABIAFABIAAASIgGgBIgFgBQgHAAgGADQgDADgDAGQgEAFgBAGIgBALIAAAng");
	this.shape_9.setTransform(40.55,12.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUApQgLgFgFgLQgGgLAAgNQAAgOAFgKQAGgKAKgHQAKgFAMgBQAHAAAHADQAIACAGAGQAGAFAEAIQADAJAAANIAAAEIhEAAQABAJAEAHQADAGAHADQAGAEAHgBQAJAAAHgEQAHgGADgIIAPAGQgFANgLAGQgKAIgPAAQgMAAgKgGgAAagHQgBgJgEgGQgDgFgGgDQgFgCgHAAQgJABgHAGQgHAHgCALIAzAAIAAAAg");
	this.shape_10.setTransform(31.725,12.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgBA3QgFgDgCgFIgDgKIAAgJIAAgtIgJAAIgJAAIAAgPIASAAIAAgMIAAgOIAPAAIAAAaIANAAIANAAIAAAPIgaAAIAAAoIAAAKQABAEADADQACAEAGAAIAHgBIAHgDIAAAPIgIACIgJABQgJAAgFgDg");
	this.shape_11.setTransform(23.375,11.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_12.setTransform(18.125,10.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgHBBIAAhYIAPAAIAABYgAgHgsQgDgEAAgFQAAgEADgDQADgEAEAAQAFAAADAEQADADAAAEQAAAFgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_13.setTransform(13.975,10.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgmA/IAAh8IBNAAIAAAQIg8AAIAAATIAAAUIA5AAIAAAPIg5AAIAAAbIAAAbg");
	this.shape_14.setTransform(7.425,10.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.textFilterbyMetrics, new cjs.Rectangle(0,-6,134.8,30.3), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAnQgIgOAAgZQAAgZAIgNQAIgMAQAAQAQAAAJAMQAIAOAAAYQAAAagIANQgIANgRAAQgPAAgJgNgAgQgfQgEAKAAAVQAAAVAEALQAGAKAKAAQAMAAAFgKQAEgLABgVQgBgUgEgKQgFgKgMAAQgKAAgGAJg");
	this.shape.setTransform(6,11.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,12.2,23.1), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAHAyIAAhGIAAgRIgDADIgPAOIgGgIIAZgVIAKAAIAABjg");
	this.shape.setTransform(5.1,11.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,12.2,23.1), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("A7RmtMA2jAAAQCaAAAACrIAAIEQAACsiaAAMg2jAAAQiaAAAAisIAAoEQAAirCaAAg");
	this.shape.setTransform(190,43);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("A7RGuQiaAAAAisIAAoDQAAisCaAAMA2kAAAQCZAAAACsIAAIDQAACsiZAAg");
	this.shape_1.setTransform(190,43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,382,88), null);


(lib.Products = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB7ATQgGgHAAgLQAAgMAGgGQAGgHAKAAQAKAAAGAGQAFAGAAAJIAAAGIggAAQAAAGADAEQAEAEAGAAIAIgBIAIgDIAAAJIgHACIgJABQgLAAgHgGgACDgOQgDAFAAAFIAWAAQAAgGgDgEQgDgCgFAAQgFAAgDACgAAYAWQgEgDgDgGQgEgFAAgIQABgLAGgGQAGgHALAAQAKAAAHAHQAFAGAAALQAAAMgFAHQgGAGgLAAQgHAAgGgDgAAbgMQgDAGAAAGQAAAQANABQAMgBAAgQQAAgQgMAAQgHAAgDAEgAh1ATQgGgHAAgLQAAgMAGgGQAFgHALAAQAKAAAFAGQAGAGAAAJIAAAGIghAAQAAAGAFAEQACAEAIAAIAIgBIAHgDIAAAJIgHACIgJABQgLAAgHgGgAhtgOQgCAEgCAGIAXAAQAAgGgDgEQgDgCgFAAQgFAAgDACgABTAYIgTgwIALAAIANAnIABAAQAAgDADgIIAJgcIALAAIgSAwgAgHAYIAAgdQAAgEgCgEQgCgDgFAAQgGAAgCAEQgDAEAAAIIAAAYIgLAAIAAgdQAAgFgCgDQgCgDgFAAQgFAAgEAEQgCAEAAAIIAAAYIgKAAIAAgwIAIAAIABAHIAAAAQACgDAFgDQAEgBAEAAQAMAAADAIIAAAAQADgFADgBQAEgCAFAAQAJAAAEAEQADAEAAAKIAAAegAifAYIAAgwIAIAAIABAJIABAAQADgFADgCQADgCAGAAIAEAAIgBAKIgEgBQgGABgEADQgEAFAAAGIAAAYg");
	this.shape.setTransform(21.5,99.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiTBGQgcAAgVgVQgUgUgBgdQABgcAUgVQAVgUAcAAIEnAAQAcAAAVAUQAUAVABAcQgBAdgUAUQgVAVgcAAg");
	this.shape_1.setTransform(21.75,98.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#16191C").s().p("AgFAgIg0g0QgDgCAAgDQAAgEADgDQACgCADAAQAEAAACACIAuAwIAvgwQACgCAEAAQADAAACACQADADAAAEQAAADgDACIg0A0QgCADgEAAQgCAAgDgDg");
	this.shape_2.setTransform(425.225,75.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAEDEF").s().p("AxzC0QghAAgXgYQgYgWAAgiIAAjHQAAghAYgXQAXgYAhAAMAjnAAAQAhAAAXAYQAYAXAAAhIAADHQAAAigYAWQgXAYghAAg");
	this.shape_3.setTransform(325.275,75.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#16191C").s().p("AEjApQgJgKAAgRQAAgRAJgJQAIgJAPAAQAOAAAIAIQAIAJAAANIAAAIIgvAAQABALAFAFQAFAFAKAAIALgBQAFAAAHgEIAAANIgLADIgNABQgRAAgJgJgAEvgGQgEAEgBAIIAgAAQgBgIgEgEQgDgEgIAAQgHAAgEAEgADsAcIAAglIgJAAIAAgHIAKgFIAFgPIAJAAIAAAQIAUAAIAAALIgUAAIAAAlQAAAFADADQADACAEAAQAGAAAFgCIAAAMIgGACIgIAAQgWAAAAgWgAAxApIgBAAIgDAIIgLAAIAAhiIAPAAIgBAmIABAAQAHgKAOAAQANAAAIAJQAHAKAAAQQAAARgIAKQgGAJgOAAQgNAAgIgJgAA1gEQgEAFAAAMIAAABQAAAOAEAEQAEAGAJAAQAIAAAEgGQAFgGAAgMQAAgXgRAAQgJAAgEAFgAgqAsQgGgGAAgNIAAgtIAPAAIAAAqQAAAJADADQAEAEAHAAQAJAAAFgFQAEgHAAgMIAAgiIAOAAIAABFIgMAAIgBgJIgBAAQgDAFgGACQgFADgIAAQgMAAgHgGgAhzAuIAAgNQANAGAKAAQAOAAAAgIQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBIgFgEIgJgEQgNgFgEgEQgEgFAAgGQAAgKAHgEQAHgFANAAQANAAAKAFIgEALQgMgFgIAAQgLAAAAAHQAAADADABQAEADAJAEIANAGQAEADACADQACAFAAAEQAAALgIAFQgIAFgNAAQgOAAgJgEgAjeApQgIgKAAgRQAAgQAIgKQAHgJAOAAQAOAAAHAKIAAAAIgBgmIAPAAIAABiIgLAAIgDgJIgBAAQgHAKgOAAQgNAAgHgJgAjSgDQgEAFAAAMQAAAMAEAGQAEAGAIAAQAJAAAFgFQAEgFAAgMIAAgCQAAgNgEgFQgFgFgJAAQgIAAgEAGgAkvApQgIgKAAgRQAAgQAIgKQAHgJAOAAQAOAAAHAKIAAAAIgBgmIAPAAIAABiIgLAAIgDgJIgBAAQgHAKgOAAQgNAAgHgJgAkjgDQgEAFAAAMQAAAMAEAGQAEAGAIAAQAJAAAFgFQAEgFAAgMIAAgCQAAgNgEgFQgFgFgJAAQgIAAgEAGgAFpAxIAAhFIAMAAIACAMIABAAQACgGAHgEQAFgDAHAAIAHAAIgBAOIgHgBQgJAAgFAGQgGAFAAAJIAAAlgADHAxIAAhiIAPAAIAABigACiAxIAAhFIAPAAIAABFgAB2AxIAAg6IgLAAIAAgHIALgEIAAgFQAAgMAGgGQAGgGAMAAQAJAAAGACIgDALIgLgBQgFAAgCADQgDADAAAGIAAAFIARAAIAAALIgRAAIAAA6gAlNAxIgJgaIgkAAIgJAaIgQAAIAjhcIAQAAIAjBcgAltgNIgJAXIAcAAIgOgoQgCAJgDAIgACkghQgDgCAAgEQAAgEADgCQACgCAEAAQAEAAACACQACACAAAEQAAAEgCACQgCACgEAAQgEAAgCgCg");
	this.shape_4.setTransform(117.575,133.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#16191C").s().p("AgFAgIg0g0QgCgCAAgEQgBgIAJAAQACAAADADIAuAvIAvgvQADgDACAAQAJAAgBAIQAAAEgBACIg1A0QgCADgEAAQgDAAgCgDg");
	this.shape_5.setTransform(209.4,133.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EAEDEF").s().p("AriC0QgiAAgXgYQgXgXAAghIAAjHQAAghAXgYQAXgXAiAAIXFAAQAhAAAYAXQAXAYAAAhIAADHQAAAhgXAXQgYAYghAAg");
	this.shape_6.setTransform(146.175,132.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#16191C").s().p("AgIAtIAAgNQALAGALAAQANAAAAgJIgBgEIgFgEIgKgEQgLgFgEgFQgEgEAAgHQAAgJAHgFQAGgFANAAQANAAAKAFIgFAMQgKgFgJAAQgMAAAAAHQAAADADABQADADALADIAMAHQAEACACAEQACAEAAAFQAAAKgHAGQgIAFgOAAQgNAAgIgEgAgoAwIAAhFIAPAAIAABFgAgngiQgCgCAAgEQAAgEACgCQACgCAEAAQAEAAACACQADACAAAEQAAAEgDACQgCACgEAAQgEAAgCgCg");
	this.shape_7.setTransform(82.375,76.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#16191C").s().p("AgGAgIgzg0QgDgCAAgDQAAgEADgDQACgCADAAQAEAAADACIAtAwIAugwQAEgCADAAQADAAACACQACADABAEQAAADgCACIg0A0QgDADgEAAQgCAAgEgDg");
	this.shape_8.setTransform(173,75.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EAEDEF").s().p("AosC0QgiAAgXgYQgXgWAAgiIAAjHQAAghAXgXQAXgYAiAAIRZAAQAhAAAYAYQAXAXAAAhIAADHQAAAigXAWQgYAYghAAg");
	this.shape_9.setTransform(127.975,75.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#16191C").s().p("ADaAuIAAgNQAOAFAKAAQANABAAgJQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIgFgEIgJgEQgOgFgDgEQgEgFgBgHQAAgJAIgEQAGgFANgBQAOABAKAFIgFAKQgLgEgIAAQgLAAAAAGQAAAEACABQAFADAJAEIAMAFQAEAEADADQABAEAAAFQAAAKgIAGQgHAFgOAAQgNAAgKgEgACtAcIAAglIgKAAIAAgHIALgFIAFgPIAJAAIAAAPIAUAAIAAAMIgUAAIAAAlQAAAFADADQADACAEAAIALgBIAAAKIgHACIgHABQgWAAAAgWgABvApQgHgKgBgRQAAgRAJgJQAIgKARAAQAMAAAIAFIgEALQgLgDgFAAQgTAAAAAXQABAMAEAFQAEAHAJgBQALABAIgGIAAAOIgIADIgLABQgQAAgJgJgAAeAsQgFgHAAgMIAAguIAOAAIAAArQAAAIAEAEQAEAEAGAAQAKAAAEgGQAEgGAAgNIAAgiIAPAAIAABGIgMAAIgBgKIgBAAQgEAGgFACQgHADgHAAQgMAAgHgGgAg0AoQgHgIAAgSQAAgRAHgJQAHgKAOAAQAOABAHAJIABAAIgBglIANAAIAABiIgKAAIgCgKIgBAAQgHALgPAAQgNAAgHgKgAgogDQgEAFAAAMQAAALAEAHQAEAGAJAAQAIAAAFgFQAEgFABgMIAAgCQgBgNgEgFQgFgGgIABQgJgBgEAHgAh7AuQgIgFgDgIQgEgIgBgMQAAgQAJgJQAJgKAPAAQAQAAAJAKQAJAKAAAPQAAASgJAJQgJAKgQAAQgKAAgHgEgAh3gEQgEAHgBAKQABAZARAAQASAAAAgZQAAgWgSAAQgJAAgEAFgAi+AxIAAhGIALAAIACANIABAAQADgHAGgDQAFgEAHAAIAHABIgBAOIgGgBQgJAAgGAGQgGAEAAAKIAAAlgAkNAxIAAhcIAbAAQARAAAJAHQAIAIABANQAAAOgKAIQgJAHgSAAIgKAAIAAAjgAj+ACIAIAAQAMgBAFgDQAGgEAAgJQAAgHgFgEQgFgFgKAAIgLAAg");
	this.shape_10.setTransform(105.4,18.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#16191C").s().p("AgFAgIg0g1QgDgCAAgDQAAgIAIAAQAEAAACADIAuAuIAvguQACgDAEAAQAIAAAAAIQAAADgDACIg0A1QgBACgFABQgCAAgDgDg");
	this.shape_11.setTransform(425.225,18.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EAEDEF").s().p("A8qC0QghAAgYgXQgXgYAAghIAAjHQAAghAXgYQAYgXAhAAMA5VAAAQAhAAAYAXQAXAYAAAhIAADHQAAAhgXAYQgYAXghAAg");
	this.shape_12.setTransform(255.75,18);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#16191C").s().p("AghAzIAAgNIAagaIALgMQAFgFACgGQADgDAAgHQAAgHgEgEQgFgEgFAAQgGAAgGACIgMAIIgJgLIAJgGIALgFQAGgCAHAAQAJAAAHAEQAHADADAGQAEAGAAAIQAAAIgDAHQgDAHgGAFQgIAKgGAFIgRARIAAAAIAvAAIAAAPg");
	this.shape_13.setTransform(21.275,78.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Products, new cjs.Rectangle(0,0,447.3,151), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A9ScIQgRAAgLgLQgMgMAAgRMAAAg2/QAAgQAMgMQALgMARAAMA6lAAAQAQAAANAMQALAMAAAQMAAAA2/QAAARgLAMQgNALgQAAg");
	mask.setTransform(191.5,180.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#16191C").s().p("AF9AfIAAgsIgLAAIAAgFIALgFIAEgQIAHAAIAAASIAWAAIAAAIIgWAAIAAAsQAAAHADADQADAEAGAAIAGgBIAEgBIAAAJIgFABIgHABQgVAAAAgXgAELAwQgGgGAAgKQAAgXAkgBIANAAIAAgFQAAgIgEgEQgDgEgJAAQgJAAgMAGIgEgJIAMgFQAGgCAIAAQANAAAHAGQAGAGAAAMIAAA0IgIAAIgDgLIAAAAQgFAHgGACQgFADgJAAQgMAAgGgGgAEqAQQgOABgFADQgGAEAAAIQAAAGADADQAGAEAFAAQALAAAGgGQAGgGAAgLIAAgGgADBAsQgJgKAAgSQAAgRAJgLQAJgLAPAAQAOAAAIAKQAIAJAAAOIAAAHIg0AAQABAOAGAGQAGAHAMAAQAMAAAMgFIAAAKIgMAEIgMABQgRAAgKgKgADKgHQgGAGAAAJIAnAAQAAgKgFgFQgFgGgJAAQgIAAgGAGgAAAAfIAAgsIgKAAIAAgFIAKgFIAEgQIAHAAIAAASIAWAAIAAAIIgWAAIAAAsQAAAHADADQADAEAGAAIAGgBIAEgBIAAAJIgFABIgHABQgVAAAAgXgAimAvQgHgGAAgOIAAgwIALAAIAAAvQAAAJAFAFQAEAEAJAAQAMAAAFgGQAFgHAAgOIAAgmIAMAAIAABKIgKAAIgBgKIgBAAQgDAFgHADQgGADgIAAQgOAAgGgHgAj1AxQgIgEgEgJQgEgJAAgMQAAgSAJgJQAJgLAQAAQAQAAAJALQAKAKAAARQAAASgJALQgKAKgQAAQgKAAgIgFgAj0gGQgFAHAAAOQAAAOAFAIQAGAHALAAQALAAAGgHQAGgHAAgPQAAgPgGgGQgGgHgLAAQgLAAgGAHgAk/AsQgJgKAAgSQAAgSAJgKQAJgLARAAIALABIAIADIgDAKIgIgDIgIgBQgXAAAAAcQAAAOAFAIQAGAHALAAQAKAAAJgEIAAAKQgHAEgMAAQgQAAgJgKgAmCAsQgJgKAAgSQAAgSAJgKQAKgLAQAAIALABIAJADIgEAKIgIgDIgIgBQgXAAAAAcQAAAOAGAIQAFAHALAAQAJAAALgEIAAAKQgIAEgLAAQgRAAgJgKgAHhA1IAAgxQAAgIgFgFQgDgEgKAAQgLAAgGAGQgFAGAAAOIAAAoIgMAAIAAhqIAMAAIgBAqIABAAQADgFAGgDQAGgEAIAAQAOAAAHAHQAHAGAAAOIAAAxgAFYA1IAAhqIAMAAIAABqgACXA1IAAgvIg1AAIAAAvIgMAAIAAhjIAMAAIAAAqIA1AAIAAgqIALAAIAABjgAgjA1IAAgxQAAgJgEgEQgEgEgJAAQgMAAgFAGQgGAGAAAOIAAAoIgLAAIAAhKIAJAAIACAKIAAAAQAFgGAFgDQAGgDAIAAQAOAAAGAHQAHAGAAAOIAAAxgAmeA1IgNggIgoAAIgMAgIgMAAIAohkIAJAAIAoBkgAnPAKIAgAAIgQgsg");
	this.shape.setTransform(61.175,341.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_1.setTransform(191.5,342.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#16191C").s().p("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");
	this.shape_2.setTransform(78.75,307);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_3.setTransform(191.5,306.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#16191C").s().p("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");
	this.shape_4.setTransform(81.65,271.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_5.setTransform(191.5,270.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A5A3A3").s().p("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");
	this.shape_6.setTransform(81.825,235);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_7.setTransform(191.5,234.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F5F5F5").ss(1,0,0,4).p("A96AAMA71AAA");
	this.shape_8.setTransform(191.5,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#16191C").s().p("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");
	this.shape_9.setTransform(80.225,199.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_10.setTransform(191.5,198.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#16191C").s().p("AjCBGIAAhsIAJAAIABALIABAAQAEgGAGgDQAFgCAIgBQAQABAHAJQAJALAAASQAAARgJALQgIAKgPAAQgHAAgGgDQgFgCgFgGIgBAAIABArgAiygXQgEAGgBAOIAAADQAAAOAFAHQAGAIALAAQAKgBAFgHQAGgJAAgMQAAgNgGgJQgFgHgKAAQgLAAgGAGgAI+AcQgKgKAAgSQAAgSAJgKQAJgLAPAAQAOABAIAIQAIAJAAAQIAAAGIgzAAQABAOAFAGQAHAHALAAQANAAALgFIAAAKIgLAEIgNABQgQAAgKgKgAJGgXQgFAFgBALIAnAAQAAgLgFgFQgEgHgJAAQgJAAgGAHgAFtAhQgHgFgFgIQgEgKAAgKQAAgSAJgLQAJgJARgBQAPABAKAJQAJALAAASQAAASgJAKQgJAKgRAAQgKAAgIgFgAFvgWQgGAHAAAPQAAAOAGAHQAFAIALAAQAMAAAFgIQAGgHAAgOQAAgOgGgIQgFgHgMAAQgLAAgFAHgAExAPIAAgsIgLAAIAAgFIALgFIAEgQIAHAAIAAARIAWAAIAAAJIgWAAIAAArQAAAHADAEQADADAGABIAGgBIAEgBIAAAJIgFACIgHAAQgVAAAAgXgADoAhIAAgLQAFADAHACIAMACQAJAAAFgEQAEgCAAgGQAAgFgEgCQgEgEgKgEQgMgDgDgDQgFgDgCgDQgCgEAAgFQAAgJAIgFQAHgGANAAQAMABAMAEIgEAKQgNgGgIAAQgIAAgEAEQgEACAAAEQAAAEABACIAFADIAOAGQAMAEAGAFQAEAFAAAHQAAALgIAFQgHAGgOAAQgQAAgIgFgACdAfQgHgGAAgOIAAgxIAMAAIAAAwQAAAKAEAEQAEAEAJABQAMgBAFgGQAFgGAAgPIAAgnIAMAAIAABLIgKAAIgBgKIgBAAQgEAGgGACQgGADgIAAQgNAAgHgHgABHAYQgMgNAAgYQAAgOAGgNQAGgLALgHQALgGAOAAQAQAAAMAGIgFAKQgMgGgLABQgRAAgJALQgJALAAASQAAAUAJAKQAJALARAAQALAAANgEIAAAKQgLAEgPAAQgWAAgMgOgAhnAcQgKgLAAgRQAAgSAJgKQAJgLAPAAQAPABAHAIQAJAKAAAPIAAAGIg0AAQAAANAHAHQAGAHAMAAQANAAAKgFIAAAKIgLAEIgNABQgQAAgKgKgAhegXQgGAGgBAKIAoAAQAAgKgFgGQgFgHgJAAQgJAAgFAHgAkuAhIAAgLQAFADAGACIAMACQAJAAAFgEQAFgCAAgGQAAgFgEgCQgEgEgLgEQgLgDgEgDQgEgDgCgDQgCgEAAgFQAAgJAHgFQAHgGAOAAQALABAMAEIgEAKQgMgGgIAAQgIAAgEAEQgFACAAAEQAAAEACACIAFADIANAGQAMAEAGAFQAFAFAAAHQAAALgIAFQgIAGgOAAQgPAAgIgFgAmsAcQgKgLAAgRQAAgSAJgKQAJgLAPAAQAPABAIAIQAIAJAAAQIAAAGIg0AAQAAANAHAHQAHAHALAAQAMAAAMgFIAAAKIgMAEIgNABQgRAAgJgKgAmjgXQgFAFgBALIAnAAQAAgLgFgFQgFgHgJAAQgJAAgFAHgAoDAcQgIgKAAgSQAAgTAIgKQAIgJAPgBQAPABAIAKIABAAIgBgpIAMAAIAABqIgKAAIgBgKIgBAAQgIALgPAAQgPAAgIgKgAn6gWQgGAJAAANQAAANAGAIQAFAIAKAAQAMgBAFgGQAFgHAAgNIAAgCQAAgQgFgHQgGgHgLAAQgKABgFAHgAqlAYQgMgNAAgYQAAgYAMgNQAMgOAWAAQAWAAAMAOQAMAOAAAXQAAAYgMANQgMAOgWAAQgWAAgMgOgAqcgrQgJALAAATQAAAUAJALQAJAJAQABQARgBAIgJQAJgLAAgUQAAgTgJgLQgIgLgRABQgQgBgJALgAKHAlIAAhLIAJAAIABAPIABAAQADgHAHgFQAFgDAIgBIAJABIgCAKIgIgBQgJAAgGAIQgHAHAAALIAAAogAIVAlIAAgwQAAgKgDgDQgEgFgIAAQgLAAgFAGQgFAHAAALIAAAqIgLAAIAAgwQAAgJgEgEQgEgFgIAAQgLAAgFAGQgFAGAAAPIAAAnIgLAAIAAhLIAJAAIACALIABAAQACgFAHgDQAFgEAIAAQASAAAFANIAAAAQADgFAHgEQAHgEAHAAQANABAGAGQAHAGAAAOIAAAxgAgeAlIAAhLIAJAAIACAPIAAAAQAFgIAFgEQAGgDAGgBIAJABIgBAKIgJgBQgHAAgHAIQgHAIAAAKIAAAogAljAlIAAhLIAKAAIABAPIAAAAQAEgHAHgFQAFgDAHgBIAJABIgBAKIgIgBQgKAAgGAIQgGAHAAALIAAAogApAAlIAAhLIAJAAIABAPIABAAQAEgIAGgEQAFgDAIgBIAJABIgCAKIgIgBQgJAAgHAIQgGAIAAAKIAAAog");
	this.shape_11.setTransform(81.825,199.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_12.setTransform(191.5,198.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#16191C").s().p("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");
	this.shape_13.setTransform(81.55,163.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_14.setTransform(191.5,162.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#16191C").s().p("AifBFIAAgJIAJAAQAMAAAFgMIADgLIgehLIAMAAIARAqIAHAVIAAAAIAWg/IAMAAIgfBVQgGANgGAFQgFAFgKAAIgLgBgAG/AcQgJgKAAgSQAAgRAIgLQAKgLAPAAQANAAAJAJQAIAJAAAQIAAAGIg0AAQACAOAFAGQAHAHALAAQAMAAAMgFIAAAKIgLAEIgOABQgPAAgLgKgAHIgXQgFAFgBALIAnAAQAAgLgFgFQgFgHgIAAQgJAAgGAHgADvAhQgHgFgFgIQgEgKAAgKQAAgSAJgLQAJgKAQAAQAQAAAKAKQAJALAAASQAAASgJAKQgKAKgQAAQgKAAgIgFgADwgWQgFAHAAAPQAAAOAFAHQAGAIALAAQAMAAAFgIQAGgHAAgOQAAgOgGgIQgFgHgMAAQgLAAgGAHgACyAPIAAgsIgLAAIAAgFIALgFIAFgQIAHAAIAAARIAVAAIAAAJIgVAAIAAArQAAAIADADQADADAGABIAGgBIAEgBIAAAJIgGACIgGAAQgVAAgBgXgABqAhIAAgLQAGAEAGABIAMACQAJAAAEgEQAFgCAAgGQAAgEgDgDQgEgEgLgEQgMgDgEgDQgEgDgCgDQgCgEAAgFQAAgJAHgFQAJgGAMAAQALAAANAFIgEAKQgNgGgIAAQgIAAgEAEQgFACAAAEQABAEACACIAEADIAOAGQALAEAHAFQAEAFAAAHQAAALgIAFQgHAGgOAAQgQAAgIgFgAAfAfQgHgGAAgOIAAgxIALAAIAAAwQABAJAEAFQAEAEAIABQAMgBAGgGQAFgHABgOIAAgnIAKAAIAABLIgJAAIgBgKIgBAAQgEAGgFACQgHADgIAAQgNAAgHgHgAglAcQgIgLAAgRQAAgSAJgLQAJgKAQAAIALABQAFABADACIgEAKIgHgDIgIgBQgWAAAAAdQgBAMAGAJQAGAHAKAAQAKAAAJgEIAAAKQgHAEgLAAQgRAAgJgKgAjUAjQgFgBgFgHIgBAAIgDAKIgIAAIAAhqIAMAAIgBApIABAAQAHgKAQgBQAPABAIAJQAIAKAAATQAAASgIAKQgIAKgPAAQgHAAgGgDgAjagXQgEAIAAAPQgBAOAGAHQAFAIALAAQAMAAAFgIQAEgJAAgMQAAgOgEgIQgGgHgLAAQgLAAgGAGgAnGAYQgMgNAAgYQAAgYAMgNQAMgOAWAAQAWAAALAOQANANAAAYQAAAYgNANQgLAOgWAAQgWAAgMgOgAm9grQgJALAAATQAAAUAJALQAJAJAQABQAQgBAJgJQAJgLgBgUQABgTgJgLQgIgLgRABQgQgBgJALgAIIAlIAAhLIAKAAIACAPIAAAAQADgHAHgFQAHgEAGAAIAJABIgCAKIgIgBQgJAAgHAIQgGAHAAALIAAAogAGXAlIAAgwQAAgKgEgDQgDgFgJAAQgLAAgEAGQgFAGAAANIAAApIgMAAIAAgwQAAgJgEgEQgDgFgIAAQgLAAgFAGQgFAGAAAPIAAAnIgMAAIAAhLIAKAAIACALIAAAAQADgFAGgDQAHgEAHAAQARAAAFANIABAAQACgFAIgEQAHgEAHAAQANAAAGAHQAGAGAAAOIAAAxgAlJAlIgkhjIAMAAIAXBAQAEAIACANQACgJAEgNIAYg/IAMAAIgkBjgAnnAlIgMghIgoAAIgNAhIgLAAIAnhkIAKAAIAoBkgAoXgEIAgAAIgQgug");
	this.shape_15.setTransform(68.4,127.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_16.setTransform(191.5,126.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#16191C").s().p("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");
	this.shape_17.setTransform(81.875,91.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_18.setTransform(191.5,90.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#16191C").s().p("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");
	this.shape_19.setTransform(87.2,55.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_20.setTransform(191.5,54.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#16191C").s().p("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");
	this.shape_21.setTransform(109.975,19.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_22.setTransform(191.5,18.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("A9ScIQgRAAgLgLQgMgMAAgRMAAAg2/QAAgQAMgMQALgMARAAMA6lAAAQAQAAANAMQALAMAAAQMAAAA2/QAAARgLAMQgNALgQAAg");
	this.shape_23.setTransform(191.5,180.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0.5,383,360), null);


(lib.menuscrollbar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AAAjHQAIAAAGAIQAGAIAAAKIAAFbQAAALgGAIQgGAHgIAAQgHAAgGgHQgGgIAAgLIAAlbQAAgKAGgIQAGgIAHAAg");
	this.shape.setTransform(2,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgNDAQgGgHAAgLIAAlbQAAgKAGgIQAGgIAHAAQAIAAAGAIQAGAIAAAKIAAFbQAAALgGAHQgGAIgIAAQgHAAgGgIg");
	this.shape_1.setTransform(2,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.menuscrollbar, new cjs.Rectangle(-1,-1,6,42), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A9ScIQgRAAgLgLQgMgMAAgRMAAAg2/QAAgQAMgMQALgMARAAMA6lAAAQAQAAANAMQALAMAAAQMAAAA2/QAAARgLAMQgNALgQAAg");
	mask.setTransform(191.5,180.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#16191C").s().p("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");
	this.shape.setTransform(81.825,343);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_1.setTransform(191.5,342.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#16191C").s().p("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");
	this.shape_2.setTransform(78.75,307);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_3.setTransform(191.5,306.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#16191C").s().p("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");
	this.shape_4.setTransform(81.65,271.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_5.setTransform(191.5,270.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#16191C").s().p("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");
	this.shape_6.setTransform(81.825,235);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_7.setTransform(191.5,234.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F5F5F5").ss(1,0,0,4).p("A96AAMA71AAA");
	this.shape_8.setTransform(191.5,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#16191C").s().p("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");
	this.shape_9.setTransform(80.225,199.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_10.setTransform(191.5,198.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#16191C").s().p("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");
	this.shape_11.setTransform(81.825,199.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_12.setTransform(191.5,198.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#16191C").s().p("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");
	this.shape_13.setTransform(81.55,163.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_14.setTransform(191.5,162.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#16191C").s().p("AifBFIAAgJIAJAAQAMAAAFgMIADgLIgehLIAMAAIARAqIAHAVIAAAAIAWg/IAMAAIgfBVQgGANgGAFQgFAFgKAAIgLgBgAG/AcQgJgKAAgSQAAgRAIgLQAKgLAPAAQANAAAJAJQAIAJAAAQIAAAGIg0AAQACAOAFAGQAHAHALAAQAMAAAMgFIAAAKIgLAEIgOABQgPAAgLgKgAHIgXQgFAFgBALIAnAAQAAgLgFgFQgFgHgIAAQgJAAgGAHgADvAhQgHgFgFgIQgEgKAAgKQAAgSAJgLQAJgKAQAAQAQAAAKAKQAJALAAASQAAASgJAKQgKAKgQAAQgKAAgIgFgADwgWQgFAHAAAPQAAAOAFAHQAGAIALAAQAMAAAFgIQAGgHAAgOQAAgOgGgIQgFgHgMAAQgLAAgGAHgACyAPIAAgsIgLAAIAAgFIALgFIAFgQIAHAAIAAARIAVAAIAAAJIgVAAIAAArQAAAIADADQADADAGABIAGgBIAEgBIAAAJIgGACIgGAAQgVAAgBgXgABqAhIAAgLQAGAEAGABIAMACQAJAAAEgEQAFgCAAgGQAAgEgDgDQgEgEgLgEQgMgDgEgDQgEgDgCgDQgCgEAAgFQAAgJAHgFQAJgGAMAAQALAAANAFIgEAKQgNgGgIAAQgIAAgEAEQgFACAAAEQABAEACACIAEADIAOAGQALAEAHAFQAEAFAAAHQAAALgIAFQgHAGgOAAQgQAAgIgFgAAfAfQgHgGAAgOIAAgxIALAAIAAAwQABAJAEAFQAEAEAIABQAMgBAGgGQAFgHABgOIAAgnIAKAAIAABLIgJAAIgBgKIgBAAQgEAGgFACQgHADgIAAQgNAAgHgHgAglAcQgIgLAAgRQAAgSAJgLQAJgKAQAAIALABQAFABADACIgEAKIgHgDIgIgBQgWAAAAAdQgBAMAGAJQAGAHAKAAQAKAAAJgEIAAAKQgHAEgLAAQgRAAgJgKgAjUAjQgFgBgFgHIgBAAIgDAKIgIAAIAAhqIAMAAIgBApIABAAQAHgKAQgBQAPABAIAJQAIAKAAATQAAASgIAKQgIAKgPAAQgHAAgGgDgAjagXQgEAIAAAPQgBAOAGAHQAFAIALAAQAMAAAFgIQAEgJAAgMQAAgOgEgIQgGgHgLAAQgLAAgGAGgAnGAYQgMgNAAgYQAAgYAMgNQAMgOAWAAQAWAAALAOQANANAAAYQAAAYgNANQgLAOgWAAQgWAAgMgOgAm9grQgJALAAATQAAAUAJALQAJAJAQABQAQgBAJgJQAJgLgBgUQABgTgJgLQgIgLgRABQgQgBgJALgAIIAlIAAhLIAKAAIACAPIAAAAQADgHAHgFQAHgEAGAAIAJABIgCAKIgIgBQgJAAgHAIQgGAHAAALIAAAogAGXAlIAAgwQAAgKgEgDQgDgFgJAAQgLAAgEAGQgFAGAAANIAAApIgMAAIAAgwQAAgJgEgEQgDgFgIAAQgLAAgFAGQgFAGAAAPIAAAnIgMAAIAAhLIAKAAIACALIAAAAQADgFAGgDQAHgEAHAAQARAAAFANIABAAQACgFAIgEQAHgEAHAAQANAAAGAHQAGAGAAAOIAAAxgAlJAlIgkhjIAMAAIAXBAQAEAIACANQACgJAEgNIAYg/IAMAAIgkBjgAnnAlIgMghIgoAAIgNAhIgLAAIAnhkIAKAAIAoBkgAoXgEIAgAAIgQgug");
	this.shape_15.setTransform(68.4,127.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_16.setTransform(191.5,126.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#16191C").s().p("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");
	this.shape_17.setTransform(81.875,91.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_18.setTransform(191.5,90.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#16191C").s().p("AAPBFIAAgJIAIAAQANAAAEgMIAEgLIgehLIAMAAIARAqIAHAVIAAAAIAWg/IANAAIghBVQgFANgGAFQgFAFgLAAIgKgBgAJvAcQgKgKAAgSQAAgRAIgLQAKgLAOAAQAOAAAJAJQAIAJAAAQIAAAGIgzAAQABAOAFAGQAHAHALAAQANAAALgFIAAAKIgLAEIgOABQgQAAgJgKgAJ3gXQgFAFgBALIAnAAQAAgLgFgFQgEgHgKAAQgJAAgFAHgAGeAhQgIgFgEgIQgEgKAAgKQAAgSAJgLQAJgKAQAAQARAAAIAKQAKALgBASQABASgKAKQgIAKgRAAQgKAAgIgFgAGggWQgHAHABAPQgBAOAHAHQAFAIALAAQAMAAAFgIQAGgHAAgOQAAgOgGgIQgFgHgMAAQgLAAgFAHgAFiAPIAAgsIgMAAIAAgFIAMgFIAEgQIAHAAIAAARIAVAAIAAAJIgVAAIAAArQAAAHADAEQADADAGABIAGgBIAEgBIAAAJIgFACIgHAAQgVAAAAgXgAEZAhIAAgLQAFADAHACIALACQAJAAAGgEQAEgCAAgGQAAgEgDgDQgEgEgMgEQgLgDgDgDQgFgDgCgDQgCgEAAgFQAAgJAHgFQAIgGANAAQALAAAMAFIgDAKQgNgGgIAAQgIAAgEAEQgFACABAEQgBAEACACIAFADIANAGQANAEAGAEQAEAGAAAHQAAALgHAFQgJAGgOAAQgPAAgIgFgADNAfQgGgGAAgOIAAgxIAMAAIAAAwQAAAJADAFQAFAEAJABQALgBAGgGQAFgHAAgOIAAgnIALAAIAABLIgJAAIgCgKIAAAAQgEAGgGACQgGADgIAAQgNAAgIgHgACKAcQgJgLAAgRQAAgSAJgLQAJgKARAAIALABQAEABAEACIgEAKIgIgDIgHgBQgYAAAAAdQABANAFAIQAGAHAKAAQAJAAALgEIAAAKQgIAEgLAAQgRAAgIgKgAgmAjQgEgBgGgHIAAAAIgCAKIgJAAIAAhqIALAAIAAApIAAAAQAJgKAPgBQAOABAJAJQAHAKAAATQAAASgHAKQgIAKgPAAQgGAAgIgDgAgqgXQgGAIAAAPQABAOAFAHQAGAIAKAAQAMAAAEgIQAGgJAAgMQAAgOgGgIQgFgHgLAAQgLAAgFAGgAimAhIAAgLQAEADAHACIAMACQAJAAAFgEQAEgCAAgGQAAgEgEgDQgDgEgLgEQgMgDgDgDQgEgDgCgDQgDgEAAgFQAAgJAIgFQAHgGANAAQAKAAAOAFIgEAKQgNgGgHAAQgJAAgEAEQgEACAAAEQAAAEABACIAGADIAMAGQAOAFAEADQAFAFABAIQgBAKgHAGQgIAGgPAAQgPAAgHgFgAjSAPIAAgsIgLAAIAAgFIALgFIAEgQIAGAAIAAARIAXAAIAAAJIgXAAIAAArQABAHADAEQADADAFABIAGgBIAFgBIAAAJIgGACIgGAAQgWAAABgXgAl6AfQgGgGAAgOIAAgxIALAAIAAAwQAAAJAEAFQAFAEAJABQALgBAGgGQAFgHAAgOIAAgnIAMAAIAABLIgKAAIgCgKIAAAAQgEAFgGADQgGADgIAAQgNAAgIgHgAnIAhQgHgFgFgIQgFgJABgLQAAgRAJgMQAJgKARAAQAPAAAJAKQAJALAAASQAAASgJAKQgJAKgQAAQgLAAgHgFgAnHgWQgFAIgBAOQABANAFAIQAGAIALAAQALAAAGgIQAGgHAAgOQAAgOgGgIQgGgHgLAAQgLAAgGAHgAoSAcQgJgLAAgRQAAgSAJgLQAJgKARAAIAKABQAFABAEACIgEAKIgIgDIgIgBQgWAAAAAdQAAANAFAIQAGAHALAAQAIAAALgEIAAAKQgIAEgLAAQgQAAgJgKgApeAhIAAgLQAGAEAFABIANACQAIAAAFgEQAFgCAAgGQAAgEgEgDQgEgEgLgEQgLgDgEgDIgHgGQgBgEAAgFQAAgJAHgFQAIgGAMAAQAMAAAMAFIgEAKQgNgGgHAAQgJAAgDAEQgFACAAAEQABAEABACIAFADIANAGQANAFAFADQAEAGABAHQAAALgIAFQgIAGgOAAQgPAAgIgFgAK4AlIAAhLIAJAAIACAPIAAAAQADgHAHgFQAHgEAGAAIAIABIgBAKIgIgBQgKAAgFAIQgHAHAAALIAAAogAJGAlIAAgwQAAgKgDgDQgEgFgJAAQgKAAgFAGQgFAGAAAMIAAAqIgLAAIAAgwQAAgJgFgEQgDgFgIAAQgLAAgFAGQgFAGAAAPIAAAnIgMAAIAAhLIAKAAIACALIABAAQACgFAHgDQAGgEAGAAQASAAAGANIAAAAQADgFAHgEQAHgEAHAAQANAAAGAHQAHAGgBAOIAAAxgAj2AlIAAgwQAAgJgFgEQgDgFgKAAQgMAAgFAGQgFAGAAAPIAAAnIgMAAIAAhLIAJAAIACALIABAAQAEgFAGgDQAHgEAHAAQANAAAHAHQAHAGAAAOIAAAxgAp9AlIAAhLIAMAAIAABLgAriAlIAAhjIAfAAQAXAAAOAMQANANgBAXQAAAYgNANQgNAOgaAAgArWAbIAOAAQAVAAALgLQAKgKAAgTQAAgTgKgKQgKgKgTAAIgRAAgAp8g0QgCgCAAgEQAAgDACgDQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAAAQAEAAACABQACAEAAACQAAAEgCACQgCACgEAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_19.setTransform(87.2,55.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_20.setTransform(191.5,54.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#16191C").s().p("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");
	this.shape_21.setTransform(109.975,19.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_22.setTransform(191.5,18.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("A9ScIQgRAAgLgLQgMgMAAgRMAAAg2/QAAgQAMgMQALgMARAAMA6lAAAQAQAAANAMQALAMAAAQMAAAA2/QAAARgLAMQgNALgQAAg");
	this.shape_23.setTransform(191.5,180.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0.5,383,360), null);


(lib.dropdownsmallhighlight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6515DD").ss(2,1,2).p("AnDihIOHAAIAAFDIuHAAg");
	this.shape.setTransform(45.2,16.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dropdownsmallhighlight, new cjs.Rectangle(-1,-1,92.4,34.3), null);


(lib.Dropdownhighlight01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6515DD").ss(2,1,1).p("A8qizMA5VAAAQAhAAAXAXQAYAYAAAhIAADHQAAAigYAXQgXAXghAAMg5VAAAQgiAAgXgXQgXgXAAgiIAAjHQAAghAXgYQAXgXAiAAg");
	this.shape.setTransform(191.5,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0)").s().p("A8qC0QgiAAgXgXQgXgXAAgiIAAjHQAAghAXgYQAXgXAiAAMA5VAAAQAhAAAXAXQAYAYAAAhIAADHQAAAigYAXQgXAXghAAg");
	this.shape_1.setTransform(191.5,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Dropdownhighlight01, new cjs.Rectangle(-1,-1,385,38), null);


(lib.dropdownhgihlight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("A6tCWIAAkrMA1bAAAIAAErg");
	this.shape.setTransform(171,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dropdownhgihlight, new cjs.Rectangle(0,0,342,30), null);


(lib.CreateAudience = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAHQgDgCAAgFQAAgDACgCQACgDADAAQAEAAACADQACACAAADQAAAEgCACQgCADgEAAQgCAAgCgCg");
	this.shape.setTransform(466.625,114.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfAxIAAgIIAIABQALAAAFgMIADgKIgchFIAMAAIAPAnIAFATIABAAIADgKIARgwIAMAAIgeBOQgEAMgGAFQgGAEgIAAIgKgBg");
	this.shape_1.setTransform(461.625,113.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_2.setTransform(454.725,112.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATAkIAAgsQAAgJgEgEQgEgEgIgBQgKAAgFAHQgGAFAAAOIAAAkIgKAAIAAhFIAIAAIACAJIABAAQADgEAGgEQAGgDAGAAQAMABAHAGQAGAGAAANIAAAtg");
	this.shape_3.setTransform(447.075,112);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAkIAAhFIAJAAIABANIABAAQAEgHAEgEQAGgEAGAAIAIABIgBAKIgIgBQgIAAgGAHQgFAHAAAKIAAAlg");
	this.shape_4.setTransform(440.85,112);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAdQgHgGAAgNIAAgsIAKAAIAAAsQAAAIAFAEQADAEAIABQALgBAFgFQAEgHAAgNIAAgjIALAAIAABEIgIAAIgCgKIgBAAQgDAGgGACQgFADgHABQgMAAgGgHg");
	this.shape_5.setTransform(433.7,112.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_6.setTransform(425.825,112.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOA+IAAgJIAJACQAFAAABgDQACgDAAgFIAAhQIALAAIAABPQAAAUgSAAQgGAAgEgBgAAEgyQgBgCAAgDQAAgEABgBQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQACABAAAEQAAADgCACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_7.setTransform(419.375,112.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTAkIAAhFIAJAAIABANIAAAAQAEgHAFgEQAGgEAGAAIAIABIgBAKIgIgBQgJAAgFAHQgFAHgBAKIAAAlg");
	this.shape_8.setTransform(413,112);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_9.setTransform(406.275,112.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAnAkIAAgtQAAgIgDgEQgEgEgIgBQgJAAgFAHQgFAFAAAMIAAAmIgJAAIAAgtQAAgIgEgEQgDgEgIgBQgKAAgEAHQgFAFAAAOIAAAkIgLAAIAAhFIAJAAIACAJIAAAAQADgEAGgEQAFgDAHAAQAQAAAEAMIABAAQADgFAGgDQAGgDAHgBQAMABAGAGQAGAGAAANIAAAtg");
	this.shape_10.setTransform(396.575,112);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_11.setTransform(386.575,112.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgJAWIAAgoIgKAAIAAgFIAKgFIAEgOIAFAAIAAAQIAUAAIAAAIIgUAAIAAAnQAAAHADADQADAEAFAAIAGgBIADgBIAAAIIgEACIgHABQgSgBAAgVg");
	this.shape_12.setTransform(380.3,111.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_13.setTransform(374.975,112.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAdQgHgGAAgNIAAgsIAKAAIAAAsQAAAIAFAEQADAEAJABQAJgBAGgFQAEgHAAgNIAAgjIALAAIAABEIgJAAIgBgKIgBAAQgDAGgGACQgFADgHABQgNAAgFgHg");
	this.shape_14.setTransform(367.8,112.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAbQgIgKAAgRQAAgQAIgKQAJgJAOAAIAKABIAIADIgDAIIgIgCIgHgBQgVAAABAaQAAANAFAHQAFAHAJAAQAJAAAJgEIAAAJQgHAEgLAAQgNAAgJgJg");
	this.shape_15.setTransform(360.9,112.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_16.setTransform(350.625,112.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgTAkIAAhFIAJAAIABANIAAAAQAEgHAFgEQAFgEAHAAIAIABIgBAKIgIgBQgJAAgEAHQgHAHAAAKIAAAlg");
	this.shape_17.setTransform(344.75,112);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgEAwIAAhFIAJAAIAABFgAgDgiQgCgCAAgEQAAgDACgCQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABABAAQABACAAADQAAAEgBACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_18.setTransform(340,110.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJAWIAAgoIgKAAIAAgFIAKgFIAEgOIAFAAIAAAQIAUAAIAAAIIgUAAIAAAnQAAAHADADQADAEAFAAIAGgBIADgBIAAAIIgEACIgGABQgUgBABgVg");
	this.shape_19.setTransform(336,111.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AATAkIAAgsQAAgJgEgEQgEgEgIgBQgKAAgFAHQgGAFAAAOIAAAkIgKAAIAAhFIAIAAIACAJIABAAQADgEAGgEQAGgDAGAAQAMABAHAGQAGAGAAANIAAAtg");
	this.shape_20.setTransform(329.775,112);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_21.setTransform(322.125,112.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgTAkIAAhFIAJAAIABANIABAAQAEgHAEgEQAGgEAGAAIAIABIgBAKIgIgBQgIAAgGAHQgFAHAAAKIAAAlg");
	this.shape_22.setTransform(312.85,112);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgFAwIAAhFIAKAAIAABFgAgEgiQgBgCAAgEQAAgDABgCQABAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQACACAAADQAAAEgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape_23.setTransform(308.1,110.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_24.setTransform(302.825,112.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AATAyIAAgtQAAgIgEgEQgEgEgIgBQgKAAgFAHQgGAFAAANIAAAlIgKAAIAAhiIAKAAIAAAdIAAAJIABAAQADgEAFgEQAGgCAHAAQAMAAAHAGQAGAGAAAMIAAAug");
	this.shape_25.setTransform(295.175,110.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgKAWIAAgoIgKAAIAAgFIAKgFIAFgOIAFAAIAAAQIAUAAIAAAIIgUAAIAAAnQAAAHADADQADAEAFAAIAFgBIAFgBIAAAIIgGACIgGABQgSgBgBgVg");
	this.shape_26.setTransform(288.8,111.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAnAkIAAgtQAAgIgDgEQgEgEgIgBQgJAAgFAHQgFAFAAAMIAAAmIgJAAIAAgtQAAgIgEgEQgDgEgIgBQgKAAgEAHQgFAFAAAOIAAAkIgLAAIAAhFIAJAAIACAJIAAAAQADgEAGgEQAFgDAHAAQAQAAAEAMIABAAQADgFAGgDQAGgDAHgBQAMABAGAGQAGAGAAANIAAAtg");
	this.shape_27.setTransform(277.125,112);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_28.setTransform(267.125,112.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgTAkIAAhFIAJAAIABANIAAAAQAFgHAEgEQAFgEAHAAIAIABIgBAKIgIgBQgIAAgGAHQgFAHgBAKIAAAlg");
	this.shape_29.setTransform(261,112);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgKAyIAAg9IgNAAIAAgEIANgEIAAgEQAAgaAVAAQAFAAAIADIgDAIQgGgCgEAAQgGAAgDAEQgCAEAAAJIAAAEIARAAIAAAIIgRAAIAAA9g");
	this.shape_30.setTransform(256.075,110.575);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_31.setTransform(247.025,112.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_32.setTransform(240.275,112.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgKAWIAAgoIgKAAIAAgFIAKgFIAFgOIAFAAIAAAQIAUAAIAAAIIgUAAIAAAnQAAAHADADQADAEAFAAIAFgBIAFgBIAAAIIgFACIgHABQgSgBgBgVg");
	this.shape_33.setTransform(234.25,111.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgVAdQgHgGAAgNIAAgsIAKAAIAAAsQAAAIAFAEQADAEAIABQAKgBAGgFQAEgHAAgNIAAgjIALAAIAABEIgIAAIgCgKIgBAAQgDAGgGACQgFADgHABQgNAAgFgHg");
	this.shape_34.setTransform(227.95,112.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgKAwQgFgDgEgFIgBAAIgCAJIgIAAIAAhiIALAAIAAAYIgBAOIABAAQAHgKAOAAQAOAAAHAJQAIAKAAAQQAAARgIAKQgIAJgNAAQgGAAgGgCgAgOgGQgFAGAAAOQAAAPAFAGQAFAGAKAAQAJAAAFgHQAFgHAAgNQAAgOgFgFQgFgHgKAAQgKAAgEAGg");
	this.shape_35.setTransform(220.225,110.675);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgFAwIAAhFIAKAAIAABFgAgEgiQgBgCAAgEQAAgDABgCQABAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQACACAAADQAAAEgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape_36.setTransform(214.4,110.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgTAkIAAhFIAJAAIABANIABAAQADgHAFgEQAFgEAHAAIAIABIgBAKIgIgBQgJAAgEAHQgHAHABAKIAAAlg");
	this.shape_37.setTransform(210.55,112);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgKAWIAAgoIgKAAIAAgFIAKgFIAFgOIAFAAIAAAQIAUAAIAAAIIgUAAIAAAnQAAAHADADQADAEAFAAIAFgBIAFgBIAAAIIgGACIgGABQgSgBgBgVg");
	this.shape_38.setTransform(205.1,111.35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgKAWIAAgoIgKAAIAAgFIAKgFIAFgOIAFAAIAAAQIAUAAIAAAIIgUAAIAAAnQAAAHADADQADAEAFAAIAFgBIAFgBIAAAIIgFACIgHABQgSgBgBgVg");
	this.shape_39.setTransform(200.5,111.35);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgVAeQgGgFAAgJQAAgVAggBIAMAAIAAgEQAAgIgDgFQgEgDgHgBQgIABgLAFIgDgIQAFgDAGgCQAGgBAGAAQAMAAAGAGQAGAFAAAMIAAAvIgIAAIgCgKIgBAAQgFAGgFADQgFACgHAAQgKAAgGgGgAgLAFQgFADAAAIQAAAFAEADQADADAGAAQAJAAAGgGQAFgEAAgKIAAgHIgLAAQgLABgGAEg");
	this.shape_40.setTransform(194.4,112.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_41.setTransform(183.975,112.075);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgYAjIAAgHIAlg2IgjAAIAAgIIAuAAIAAAIIgkA1IAlAAIAAAIg");
	this.shape_42.setTransform(177.225,112.075);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgfAxIAAgIIAIABQALAAAFgMIADgKIgchFIAMAAIAPAnIAFATIABAAIADgKIARgwIAMAAIgeBOQgEAMgGAFQgGAEgIAAIgKgBg");
	this.shape_43.setTransform(170.925,113.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgEAyIAAhiIAJAAIAABig");
	this.shape_44.setTransform(165.975,110.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgVAeQgGgFAAgJQAAgVAggBIANAAIAAgEQgBgIgDgFQgDgDgJgBQgHABgLAFIgDgIQAFgDAGgCQAGgBAFAAQANAAAGAGQAGAFAAAMIAAAvIgIAAIgCgKIAAAAQgGAGgFADQgFACgHAAQgLAAgFgGgAgKAFQgGADAAAIQAAAFADADQAEADAGAAQAJAAAFgGQAGgEAAgKIAAgHIgKAAQgMABgFAEg");
	this.shape_45.setTransform(160.5,112.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AATAkIAAgsQAAgJgEgEQgEgEgIgBQgKAAgFAHQgGAFAAAOIAAAkIgKAAIAAhFIAIAAIACAJIABAAQADgEAGgEQAGgDAGAAQAMABAHAGQAGAGAAANIAAAtg");
	this.shape_46.setTransform(153.125,112);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgVAeQgGgFAAgJQAAgVAhgBIALAAIAAgEQABgIgEgFQgEgDgHgBQgIABgLAFIgDgIQAFgDAGgCQAGgBAGAAQAMAAAGAGQAGAFAAAMIAAAvIgIAAIgCgKIgBAAQgFAGgFADQgFACgHAAQgLAAgFgGgAgLAFQgFADAAAIQAAAFAEADQADADAGAAQAJAAAGgGQAFgEAAgKIAAgHIgLAAQgLABgGAEg");
	this.shape_47.setTransform(145.25,112.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_48.setTransform(134.525,112.075);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgKAWIAAgoIgKAAIAAgFIAKgFIAFgOIAFAAIAAAQIAUAAIAAAIIgUAAIAAAnQAAAHADADQADAEAFAAIAFgBIAFgBIAAAIIgGACIgFABQgUgBAAgVg");
	this.shape_49.setTransform(128.25,111.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_50.setTransform(119.525,112.075);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgTAkIAAhFIAJAAIABANIAAAAQAEgHAFgEQAFgEAHAAIAIABIgBAKIgIgBQgJAAgFAHQgFAHgBAKIAAAlg");
	this.shape_51.setTransform(114.2,112);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_52.setTransform(107.475,112.075);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgJAWIAAgoIgLAAIAAgFIALgFIAEgOIAFAAIAAAQIAUAAIAAAIIgUAAIAAAnQAAAHADADQADAEAFAAIAGgBIADgBIAAAIIgFACIgFABQgUgBABgVg");
	this.shape_53.setTransform(101.45,111.35);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgEAyIAAhiIAJAAIAABig");
	this.shape_54.setTransform(97.525,110.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgFAwIAAhFIAKAAIAABFgAgEgiQgBgCAAgEQAAgDABgCQABAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQACACAAADQAAAEgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape_55.setTransform(94.25,110.775);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgKAyIAAg9IgNAAIAAgEIANgEIAAgEQAAgaAVAAQAFAAAIADIgDAIQgGgCgEAAQgGAAgDAEQgCAEAAAJIAAAEIARAAIAAAIIgRAAIAAA9g");
	this.shape_56.setTransform(90.775,110.575);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgEAyIAAhiIAJAAIAABig");
	this.shape_57.setTransform(83.125,110.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgVAeQgGgFAAgJQAAgVAhgBIALAAIAAgEQABgIgEgFQgEgDgHgBQgIABgLAFIgDgIQAFgDAGgCQAGgBAGAAQAMAAAGAGQAGAFAAAMIAAAvIgIAAIgCgKIgBAAQgFAGgFADQgFACgHAAQgKAAgGgGgAgLAFQgFADAAAIQAAAFAEADQADADAGAAQAJAAAGgGQAFgEAAgKIAAgHIgLAAQgLABgGAEg");
	this.shape_58.setTransform(77.65,112.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AATAkIAAgsQAAgJgEgEQgEgEgIgBQgKAAgFAHQgGAFAAAOIAAAkIgKAAIAAhFIAIAAIACAJIABAAQADgEAGgEQAGgDAGAAQAMABAHAGQAGAGAAANIAAAtg");
	this.shape_59.setTransform(70.275,112);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_60.setTransform(62.325,112.075);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgFAwIAAhFIAKAAIAABFgAgDgiQgCgCAAgEQAAgDACgCQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABABAAQABACAAADQAAAEgBACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_61.setTransform(56.75,110.775);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgKAWIAAgoIgKAAIAAgFIAKgFIAFgOIAFAAIAAAQIAUAAIAAAIIgUAAIAAAnQAAAHADADQADAEAFAAIAFgBIAFgBIAAAIIgGACIgFABQgUgBAAgVg");
	this.shape_62.setTransform(52.75,111.35);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgEAwIAAhFIAJAAIAABFgAgDgiQgCgCAAgEQAAgDACgCQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABABAAQABACAAADQAAAEgBACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_63.setTransform(48.85,110.775);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgWApQgIgKAAgRQAAgQAIgKQAHgJAOAAQANAAAIAKIAAAAIAAgFIAAgFIAAgcIAKAAIAABiIgIAAIgCgKIAAAAQgIALgNAAQgOAAgHgJgAgOgFQgFAGAAANQAAAOAFAGQAFAHAJAAQAKAAAFgGQAFgGAAgNIAAgCQAAgOgFgGQgFgGgKAAQgJAAgFAHg");
	this.shape_64.setTransform(43.05,110.675);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgWApQgHgKgBgRQABgQAHgKQAIgJANAAQAOAAAHAKIABAAIgBgFIAAgFIAAgcIALAAIAABiIgJAAIgBgKIgBAAQgHALgOAAQgNAAgIgJgAgOgFQgFAGAAANQAAAOAFAGQAFAHAJAAQAKAAAFgGQAFgGAAgNIAAgCQAAgOgFgGQgFgGgKAAQgJAAgFAHg");
	this.shape_65.setTransform(35.1,110.675);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgVAeQgGgFAAgJQAAgVAggBIAMAAIAAgEQAAgIgDgFQgEgDgHgBQgIABgLAFIgDgIQAFgDAGgCQAGgBAGAAQAMAAAGAGQAGAFAAAMIAAAvIgIAAIgCgKIgBAAQgFAGgFADQgFACgHAAQgKAAgGgGgAgLAFQgFADAAAIQAAAFAEADQADADAGAAQAJAAAGgGQAFgEAAgKIAAgHIgLAAQgLABgGAEg");
	this.shape_66.setTransform(27.45,112.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_67.setTransform(454.025,92.375);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AATAxIAAgtQAAgHgEgEQgEgEgIgBQgKAAgFAHQgGAFAAANIAAAkIgKAAIAAhiIAKAAIAAAeIAAAJIABAAQADgEAFgEQAGgCAHAAQAMAAAHAGQAGAGAAAMIAAAtg");
	this.shape_68.setTransform(446.375,90.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgKAWIAAgoIgKAAIAAgGIAKgEIAFgPIAFAAIAAARIAUAAIAAAIIgUAAIAAAnQAAAHADADQADAEAFAAIAFgBIAFAAIAAAHIgGACIgGABQgSgBgBgVg");
	this.shape_69.setTransform(440,91.65);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_70.setTransform(430.725,92.375);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_71.setTransform(423.975,92.375);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgWAdQgGgGAAgNIAAgsIALAAIAAAsQAAAIAEAEQAEAFAHAAQALgBAEgGQAFgFABgOIAAgjIAKAAIAABEIgIAAIgCgKIAAAAQgEAGgFACQgHAEgGAAQgMAAgHgHg");
	this.shape_72.setTransform(416.8,92.45);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgWApQgIgKAAgRQAAgQAIgKQAHgJAOAAQANAAAIAKIAAAAIAAgFIAAgFIAAgcIAKAAIAABiIgIAAIgCgKIAAAAQgIALgNAAQgOAAgHgJgAgOgFQgFAGAAANQAAAOAFAGQAFAHAJAAQAKAAAFgGQAFgGAAgNIAAgCQAAgOgFgGQgFgGgKAAQgJAAgFAHg");
	this.shape_73.setTransform(405.3,90.975);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AATAjIAAgsQAAgIgEgEQgEgEgIgBQgKAAgFAHQgGAFAAAOIAAAjIgKAAIAAhEIAIAAIACAJIABAAQADgEAGgEQAGgDAGAAQAMABAHAGQAGAGAAANIAAAsg");
	this.shape_74.setTransform(397.525,92.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgVAfQgGgGAAgJQAAgVAhgBIAMAAIAAgEQgBgJgDgDQgDgFgJAAQgHABgLAFIgDgIQAFgDAGgCQAGgBAFAAQANAAAGAGQAGAFAAAMIAAAuIgIAAIgCgJIAAAAQgGAGgFADQgFACgHAAQgLAAgFgFgAgKAFQgGADAAAIQAAAFADADQAEADAGAAQAJAAAFgFQAGgGAAgJIAAgHIgKAAQgMABgFAEg");
	this.shape_75.setTransform(389.65,92.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_76.setTransform(379.225,92.375);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgKAWIAAgoIgJAAIAAgGIAJgEIAFgPIAFAAIAAARIAUAAIAAAIIgUAAIAAAnQAAAHADADQADAEAFAAIAGgBIADAAIAAAHIgEACIgHABQgSgBgBgVg");
	this.shape_77.setTransform(373.2,91.65);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgVAfQgGgGAAgJQAAgVAggBIAMAAIAAgEQABgJgEgDQgEgFgHAAQgIABgLAFIgDgIQAFgDAGgCQAGgBAGAAQAMAAAGAGQAGAFAAAMIAAAuIgIAAIgCgJIgBAAQgFAGgFADQgFACgHAAQgLAAgFgFgAgLAFQgFADAAAIQAAAFAEADQADADAGAAQAJAAAGgFQAFgGAAgJIAAgHIgLAAQgLABgGAEg");
	this.shape_78.setTransform(367.1,92.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgWApQgHgKgBgRQABgQAHgKQAIgJANAAQAOAAAHAKIABAAIgBgFIAAgFIAAgcIALAAIAABiIgJAAIgBgKIgBAAQgHALgOAAQgNAAgIgJgAgOgFQgFAGAAANQAAAOAFAGQAFAHAJAAQAKAAAFgGQAFgGAAgNIAAgCQAAgOgFgGQgFgGgKAAQgJAAgFAHg");
	this.shape_79.setTransform(359.55,90.975);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgTAjIAAhEIAJAAIABANIAAAAQAEgHAFgDQAFgFAHAAIAIABIgBAKIgIgBQgJAAgEAHQgHAHAAAKIAAAkg");
	this.shape_80.setTransform(350.15,92.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_81.setTransform(343.425,92.375);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgWApQgHgKgBgRQABgQAHgKQAIgJANAAQAOAAAHAKIABAAIgBgFIAAgFIAAgcIALAAIAABiIgJAAIgBgKIgBAAQgHALgOAAQgNAAgIgJgAgOgFQgFAGAAANQAAAOAFAGQAFAHAJAAQAKAAAFgGQAFgGAAgNIAAgCQAAgOgFgGQgFgGgKAAQgJAAgFAHg");
	this.shape_82.setTransform(335.6,90.975);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgTAjIAAhEIAJAAIABANIABAAQAEgHAEgDQAGgFAGAAIAIABIgBAKIgIgBQgIAAgGAHQgFAHAAAKIAAAkg");
	this.shape_83.setTransform(329.6,92.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_84.setTransform(322.575,92.375);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgJAWIAAgoIgKAAIAAgGIAKgEIAEgPIAFAAIAAARIAUAAIAAAIIgUAAIAAAnQAAAHADADQADAEAFAAIAFgBIAEAAIAAAHIgEACIgHABQgSgBAAgVg");
	this.shape_85.setTransform(312.9,91.65);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_86.setTransform(307.575,92.375);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgTAjIAAhEIAJAAIABANIABAAQAEgHAEgDQAGgFAGAAIAIABIgBAKIgIgBQgIAAgGAHQgFAHAAAKIAAAkg");
	this.shape_87.setTransform(302.25,92.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgFAwIAAhFIAKAAIAABFgAgDgiQgCgCAAgEQAAgDACgCQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABABAAQABACAAADQAAAEgBACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_88.setTransform(297.5,91.075);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgKAyIAAg9IgNAAIAAgEIANgEIAAgEQAAgaAVAAQAFAAAIADIgDAIQgGgCgEAAQgGAAgDAEQgCAEAAAJIAAAEIARAAIAAAIIgRAAIAAA9g");
	this.shape_89.setTransform(294.025,90.875);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgTAjIAAhEIAJAAIABANIABAAQAEgHAEgDQAGgFAGAAIAIABIgBAKIgIgBQgIAAgGAHQgFAHAAAKIAAAkg");
	this.shape_90.setTransform(285.85,92.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgFAwIAAhFIAKAAIAABFgAgEgiQgBgCAAgEQAAgDABgCQABAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQACACAAADQAAAEgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape_91.setTransform(281.1,91.075);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_92.setTransform(275.825,92.375);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AATAxIAAgtQAAgHgEgEQgEgEgIgBQgKAAgFAHQgGAFAAANIAAAkIgKAAIAAhiIAKAAIAAAeIAAAJIABAAQADgEAFgEQAGgCAHAAQAMAAAHAGQAGAGAAAMIAAAtg");
	this.shape_93.setTransform(268.175,90.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgKAWIAAgoIgKAAIAAgGIAKgEIAFgPIAFAAIAAARIAUAAIAAAIIgUAAIAAAnQAAAHADADQADAEAFAAIAFgBIAFAAIAAAHIgGACIgGABQgSgBgBgVg");
	this.shape_94.setTransform(261.8,91.65);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AATAjIAAgsQAAgIgEgEQgEgEgIgBQgKAAgFAHQgGAFAAAOIAAAjIgKAAIAAhEIAIAAIACAJIABAAQADgEAGgEQAGgDAGAAQAMABAHAGQAGAGAAANIAAAsg");
	this.shape_95.setTransform(252.175,92.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_96.setTransform(244.225,92.375);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgWApQgIgKAAgRQAAgQAIgKQAHgJAOAAQAOAAAHAKIABAAIgBgFIAAgFIAAgcIALAAIAABiIgJAAIgBgKIgBAAQgHALgOAAQgOAAgHgJgAgOgFQgFAGAAANQAAAOAFAGQAFAHAJAAQAKAAAFgGQAFgGAAgNIAAgCQAAgOgFgGQgFgGgKAAQgJAAgFAHg");
	this.shape_97.setTransform(232.75,90.975);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_98.setTransform(225.325,92.375);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_99.setTransform(218.575,92.375);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgVAfQgGgGAAgJQAAgVAggBIANAAIAAgEQAAgJgEgDQgEgFgHAAQgIABgLAFIgDgIQAFgDAGgCQAGgBAFAAQANAAAGAGQAGAFAAAMIAAAuIgIAAIgCgJIAAAAQgGAGgFADQgFACgHAAQgKAAgGgFgAgLAFQgFADAAAIQAAAFADADQAEADAGAAQAJAAAGgFQAFgGAAgJIAAgHIgLAAQgLABgGAEg");
	this.shape_100.setTransform(211.6,92.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgKAwQgFgDgEgFIgBAAIgCAJIgIAAIAAhiIALAAIAAAYIgBAOIABAAQAHgKAOAAQAOAAAHAJQAIAKAAAQQAAARgIAKQgIAJgNAAQgGAAgGgCgAgOgGQgFAGAAAOQAAAPAFAGQAFAGAKAAQAJAAAFgHQAFgHAAgNQAAgOgFgFQgFgHgKAAQgKAAgEAGg");
	this.shape_101.setTransform(204.425,90.975);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_102.setTransform(193.775,92.375);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgTAjIAAhEIAJAAIABANIAAAAQAEgHAFgDQAFgFAHAAIAIABIgBAKIgIgBQgJAAgFAHQgFAHgBAKIAAAkg");
	this.shape_103.setTransform(188.45,92.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_104.setTransform(181.725,92.375);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAnAjIAAgsQAAgIgDgEQgEgEgIgBQgJAAgFAHQgFAFAAAMIAAAlIgJAAIAAgsQAAgIgEgEQgDgEgIgBQgKAAgEAHQgFAFAAAOIAAAjIgLAAIAAhEIAJAAIACAJIAAAAQADgEAGgEQAFgDAHAAQAQABAEALIABAAQADgFAGgDQAGgDAHgBQAMABAGAGQAGAGAAANIAAAsg");
	this.shape_105.setTransform(172.025,92.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_106.setTransform(162.025,92.375);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgJAWIAAgoIgKAAIAAgGIAKgEIAEgPIAFAAIAAARIAUAAIAAAIIgUAAIAAAnQAAAHADADQADAEAFAAIAGgBIADAAIAAAHIgEACIgHABQgSgBAAgVg");
	this.shape_107.setTransform(155.75,91.65);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_108.setTransform(150.425,92.375);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgVAdQgHgGAAgNIAAgsIAKAAIAAAsQAAAIAFAEQADAFAJAAQAJgBAGgGQAEgFAAgOIAAgjIALAAIAABEIgJAAIgBgKIgBAAQgDAGgGACQgFAEgHAAQgNAAgFgHg");
	this.shape_109.setTransform(143.25,92.45);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgQAbQgIgKAAgRQAAgQAIgKQAJgJAOAAIAKABIAIADIgDAIIgIgCIgHgBQgVAAABAaQAAANAFAHQAFAHAJAAQAJAAAJgEIAAAJQgHAEgLAAQgNAAgJgJg");
	this.shape_110.setTransform(136.35,92.375);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_111.setTransform(126.075,92.375);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AATAxIAAgtQAAgHgEgEQgEgEgIgBQgKAAgFAHQgGAFAAANIAAAkIgKAAIAAhiIAKAAIAAAeIAAAJIABAAQADgEAFgEQAGgCAHAAQAMAAAHAGQAGAGAAAMIAAAtg");
	this.shape_112.setTransform(118.425,90.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgKAWIAAgoIgKAAIAAgGIAKgEIAFgPIAFAAIAAARIAUAAIAAAIIgUAAIAAAnQAAAHADADQADAEAFAAIAFgBIAFAAIAAAHIgGACIgFABQgUgBAAgVg");
	this.shape_113.setTransform(112.05,91.65);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgKAWIAAgoIgKAAIAAgGIAKgEIAFgPIAFAAIAAARIAUAAIAAAIIgUAAIAAAnQAAAHADADQADAEAFAAIAFgBIAFAAIAAAHIgGACIgFABQgUgBAAgVg");
	this.shape_114.setTransform(104.05,91.65);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgQAbQgIgKAAgRQAAgQAIgKQAJgJAOAAIAKABIAIADIgDAIIgIgCIgHgBQgUAAgBAaQABANAFAHQAFAHAJAAQAJAAAJgEIAAAJQgHAEgKAAQgPAAgIgJg");
	this.shape_115.setTransform(98.85,92.375);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_116.setTransform(91.975,92.375);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgEAxIAAhiIAJAAIAABig");
	this.shape_117.setTransform(86.625,90.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_118.setTransform(81.375,92.375);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_119.setTransform(74.625,92.375);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_120.setTransform(64.175,92.375);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgJAWIAAgoIgKAAIAAgGIAKgEIAEgPIAFAAIAAARIAUAAIAAAIIgUAAIAAAnQAAAHADADQADAEAFAAIAGgBIADAAIAAAHIgEACIgGABQgUgBABgVg");
	this.shape_121.setTransform(57.9,91.65);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgTAjIAAhEIAJAAIABANIABAAQAEgHAEgDQAGgFAGAAIAIABIgBAKIgIgBQgIAAgGAHQgFAHAAAKIAAAkg");
	this.shape_122.setTransform(50.05,92.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_123.setTransform(43.325,92.375);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgJAWIAAgoIgKAAIAAgGIAKgEIAEgPIAFAAIAAARIAUAAIAAAIIgUAAIAAAnQAAAHADADQADAEAFAAIAGgBIADAAIAAAHIgEACIgGABQgTgBAAgVg");
	this.shape_124.setTransform(37.3,91.65);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgEAxIAAhiIAJAAIAABig");
	this.shape_125.setTransform(33.375,90.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgFAwIAAhFIAKAAIAABFgAgEgiQgBgCAAgEQAAgDABgCQABAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQACACAAADQAAAEgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape_126.setTransform(30.1,91.075);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgKAyIAAg9IgNAAIAAgEIANgEIAAgEQAAgaAVAAQAFAAAIADIgDAIQgGgCgEAAQgGAAgDAEQgCAEAAAJIAAAEIARAAIAAAIIgRAAIAAA9g");
	this.shape_127.setTransform(26.625,90.875);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_128.setTransform(462.825,72.675);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgJAWIAAgoIgKAAIAAgGIAKgEIAEgPIAFAAIAAARIAUAAIAAAIIgUAAIAAAnQAAAHADADQADADAFABIAGgBIADAAIAAAIIgEABIgHABQgSgBAAgVg");
	this.shape_129.setTransform(456.8,71.95);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgVAfQgGgGAAgJQAAgVAhgBIALAAIAAgFQABgIgEgDQgEgFgHAAQgIABgLAFIgDgIQAFgDAGgCQAGgBAGAAQAMAAAGAGQAGAFAAAMIAAAuIgIAAIgCgJIgBAAQgFAGgFACQgFADgHAAQgKAAgGgFgAgLAFQgFADAAAIQAAAFAEADQADADAGAAQAJAAAGgFQAFgGAAgKIAAgGIgKAAQgMABgGAEg");
	this.shape_130.setTransform(450.7,72.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgWApQgHgKAAgRQAAgQAHgKQAIgJANAAQAOAAAHAKIABAAIgBgFIAAgFIAAgcIALAAIAABiIgJAAIgBgKIgBAAQgHALgOAAQgNAAgIgJgAgOgFQgFAGAAANQAAAOAFAGQAFAHAJAAQAKAAAFgGQAFgGAAgNIAAgCQAAgOgFgGQgFgGgKAAQgJAAgFAHg");
	this.shape_131.setTransform(443.15,71.275);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_132.setTransform(432.325,72.675);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AATAxIAAgtQAAgHgEgEQgEgEgIgBQgKAAgFAHQgGAFAAANIAAAkIgKAAIAAhiIAKAAIAAAeIAAAJIABAAQADgEAFgDQAGgDAHAAQAMAAAHAGQAGAGAAAMIAAAtg");
	this.shape_133.setTransform(424.675,71.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgKAWIAAgoIgKAAIAAgGIAKgEIAFgPIAFAAIAAARIAUAAIAAAIIgUAAIAAAnQAAAHADADQADADAFABIAFgBIAFAAIAAAIIgFABIgHABQgSgBgBgVg");
	this.shape_134.setTransform(418.3,71.95);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_135.setTransform(409.025,72.675);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_136.setTransform(402.275,72.675);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgaAmQgIgJgBgQIAAg7IALAAIAAA8QAAALAGAGQAHAHALAAQAMAAAGgHQAGgGAAgMIAAg7IALAAIAAA7QAAAQgJAJQgKAJgQAAQgQAAgKgJg");
	this.shape_137.setTransform(394.45,71.575);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgEAHQgDgCAAgFQAAgDACgCQACgDADAAQAEAAACADQACACAAADQAAAEgCACQgCADgEAAQgCAAgCgCg");
	this.shape_138.setTransform(384.575,75.475);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgVAfQgGgGAAgJQAAgVAggBIANAAIAAgFQAAgIgEgDQgEgFgHAAQgIABgLAFIgDgIQAFgDAGgCQAGgBAGAAQAMAAAGAGQAGAFAAAMIAAAuIgIAAIgCgJIAAAAQgGAGgFACQgFADgHAAQgKAAgGgFgAgLAFQgFADAAAIQAAAFADADQAEADAGAAQAJAAAGgFQAFgGAAgKIAAgGIgLAAQgLABgGAEg");
	this.shape_139.setTransform(379,72.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgEAwIAAhFIAJAAIAABFgAgEgiQgBgCAAgEQAAgDABgCQABAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQACACAAADQAAAEgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape_140.setTransform(373.95,71.375);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgTAjIAAhEIAJAAIABANIABAAQAEgHAEgDQAGgFAGAAIAIABIgBAKIgIgBQgIAAgGAHQgFAHAAAKIAAAkg");
	this.shape_141.setTransform(370.1,72.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_142.setTransform(363.375,72.675);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgJAWIAAgoIgKAAIAAgGIAKgEIAEgPIAFAAIAAARIAUAAIAAAIIgUAAIAAAnQAAAHADADQADADAFABIAGgBIADAAIAAAIIgEABIgHABQgSgBAAgVg");
	this.shape_143.setTransform(357.35,71.95);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgFAwIAAhFIAKAAIAABFgAgEgiQgBgCAAgEQAAgDABgCQABAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQACACAAADQAAAEgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape_144.setTransform(353.45,71.375);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgTAjIAAhEIAJAAIABANIABAAQADgHAFgDQAFgFAHAAIAIABIgBAKIgIgBQgJAAgEAHQgHAHABAKIAAAkg");
	this.shape_145.setTransform(349.6,72.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgQAbQgIgKAAgRQAAgQAIgKQAJgJAOAAIAKABIAIADIgDAIIgIgCIgHgBQgVAAAAAaQABANAFAHQAFAHAJAAQAJAAAJgEIAAAJQgHAEgLAAQgOAAgIgJg");
	this.shape_146.setTransform(343.55,72.675);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgKAyIAAg9IgNAAIAAgEIANgEIAAgEQAAgaAVAAQAFAAAIADIgDAIQgGgCgEAAQgGAAgDAEQgCAEAAAJIAAAEIARAAIAAAIIgRAAIAAA9g");
	this.shape_147.setTransform(335.075,71.175);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_148.setTransform(328.575,72.675);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgJAWIAAgoIgKAAIAAgGIAKgEIAEgPIAFAAIAAARIAUAAIAAAIIgUAAIAAAnQAAAHADADQADADAFABIAGgBIADAAIAAAIIgEABIgGABQgUgBABgVg");
	this.shape_149.setTransform(318.9,71.95);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_150.setTransform(313.025,72.675);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_151.setTransform(306.275,72.675);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgWApQgIgKABgRQgBgQAIgKQAHgJAOAAQANAAAIAKIAAAAIAAgFIAAgFIAAgcIAKAAIAABiIgIAAIgCgKIAAAAQgIALgNAAQgOAAgHgJgAgOgFQgFAGAAANQAAAOAFAGQAFAHAJAAQAKAAAFgGQAFgGAAgNIAAgCQAAgOgFgGQgFgGgKAAQgJAAgFAHg");
	this.shape_152.setTransform(295.6,71.275);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_153.setTransform(288.175,72.675);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AATAjIAAgsQAAgIgEgEQgEgEgIgBQgKAAgFAHQgGAFAAAOIAAAjIgKAAIAAhEIAIAAIACAJIABAAQADgEAGgDQAGgEAGAAQAMABAHAGQAGAGAAANIAAAsg");
	this.shape_154.setTransform(280.525,72.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgEAwIAAhFIAJAAIAABFgAgDgiQgCgCAAgEQAAgDACgCQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABABAAQABACAAADQAAAEgBACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_155.setTransform(274.85,71.375);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgKAyIAAg9IgNAAIAAgEIANgEIAAgEQAAgaAVAAQAFAAAIADIgDAIQgGgCgEAAQgGAAgDAEQgCAEAAAJIAAAEIARAAIAAAIIgRAAIAAA9g");
	this.shape_156.setTransform(271.375,71.175);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_157.setTransform(265.175,72.675);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgWApQgIgKABgRQgBgQAIgKQAHgJAOAAQANAAAIAKIAAAAIAAgFIAAgFIAAgcIAKAAIAABiIgIAAIgCgKIAAAAQgIALgNAAQgOAAgHgJgAgOgFQgFAGAAANQAAAOAFAGQAFAHAJAAQAKAAAFgGQAFgGAAgNIAAgCQAAgOgFgGQgFgGgKAAQgJAAgFAHg");
	this.shape_158.setTransform(257.35,71.275);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgVAfQgGgGAAgJQAAgVAhgBIALAAIAAgFQAAgIgDgDQgDgFgJAAQgHABgLAFIgDgIQAFgDAGgCQAGgBAGAAQAMAAAGAGQAGAFAAAMIAAAuIgIAAIgCgJIgBAAQgFAGgFACQgFADgHAAQgKAAgGgFgAgKAFQgGADAAAIQAAAFAEADQADADAGAAQAJAAAFgFQAGgGAAgKIAAgGIgKAAQgMABgFAEg");
	this.shape_159.setTransform(246.3,72.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgKAWIAAgoIgKAAIAAgGIAKgEIAFgPIAFAAIAAARIAUAAIAAAIIgUAAIAAAnQAAAHADADQADADAFABIAFgBIAFAAIAAAIIgGABIgFABQgUgBAAgVg");
	this.shape_160.setTransform(237.15,71.95);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_161.setTransform(231.275,72.675);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_162.setTransform(223.975,72.675);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAnAjIAAgsQAAgIgDgEQgEgEgIgBQgJAAgFAHQgFAFAAAMIAAAlIgJAAIAAgsQAAgIgEgEQgDgEgIgBQgKAAgEAHQgFAFAAAOIAAAjIgLAAIAAhEIAJAAIACAJIAAAAQADgEAGgDQAFgEAHAAQAQABAEAMIABAAQADgGAGgDQAGgDAHgBQAMABAGAGQAGAGAAANIAAAsg");
	this.shape_163.setTransform(214.275,72.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgJAWIAAgoIgKAAIAAgGIAKgEIAEgPIAFAAIAAARIAUAAIAAAIIgUAAIAAAnQAAAHADADQADADAFABIAGgBIADAAIAAAIIgEABIgHABQgSgBAAgVg");
	this.shape_164.setTransform(202.45,71.95);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgVAfQgGgGAAgJQAAgVAhgBIALAAIAAgFQAAgIgDgDQgDgFgJAAQgHABgLAFIgDgIQAFgDAGgCQAGgBAGAAQAMAAAGAGQAGAFAAAMIAAAuIgIAAIgCgJIgBAAQgFAGgFACQgFADgHAAQgKAAgGgFgAgKAFQgGADAAAIQAAAFAEADQADADAGAAQAJAAAFgFQAGgGAAgKIAAgGIgKAAQgMABgFAEg");
	this.shape_165.setTransform(196.35,72.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AATAxIAAgtQAAgHgEgEQgEgEgIgBQgKAAgFAHQgGAFAAANIAAAkIgKAAIAAhiIAKAAIAAAeIAAAJIABAAQADgEAFgDQAGgDAHAAQAMAAAHAGQAGAGAAAMIAAAtg");
	this.shape_166.setTransform(188.975,71.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgKAWIAAgoIgKAAIAAgGIAKgEIAFgPIAFAAIAAARIAUAAIAAAIIgUAAIAAAnQAAAHADADQADADAFABIAFgBIAFAAIAAAIIgGABIgGABQgSgBgBgVg");
	this.shape_167.setTransform(182.6,71.95);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_168.setTransform(173.875,72.675);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgTAjIAAhEIAJAAIABANIAAAAQAFgHAEgDQAGgFAGAAIAIABIgBAKIgIgBQgJAAgEAHQgHAHAAAKIAAAkg");
	this.shape_169.setTransform(168.55,72.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_170.setTransform(161.825,72.675);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AAnAjIAAgsQAAgIgDgEQgEgEgIgBQgJAAgFAHQgFAFAAAMIAAAlIgJAAIAAgsQAAgIgEgEQgDgEgIgBQgKAAgEAHQgFAFAAAOIAAAjIgLAAIAAhEIAJAAIACAJIAAAAQADgEAGgDQAFgEAHAAQAQABAEAMIABAAQADgGAGgDQAGgDAHgBQAMABAGAGQAGAGAAANIAAAsg");
	this.shape_171.setTransform(152.125,72.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgQAgQgHgFgEgIQgEgIAAgLQAAgQAJgKQAIgJAOAAQAPAAAIAKQAJAJAAAQQAAARgJAJQgIAKgPAAQgJAAgHgEgAgPgTQgFAGAAANQAAANAFAHQAGAHAJAAQAKAAAGgHQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_172.setTransform(142.125,72.675);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgJAWIAAgoIgKAAIAAgGIAKgEIAEgPIAFAAIAAARIAUAAIAAAIIgUAAIAAAnQAAAHADADQADADAFABIAGgBIADAAIAAAIIgEABIgGABQgTgBAAgVg");
	this.shape_173.setTransform(135.85,71.95);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_174.setTransform(130.525,72.675);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgVAdQgHgGAAgNIAAgsIALAAIAAAsQAAAIADAEQAFAFAIAAQAKAAAFgHQAEgFAAgOIAAgjIALAAIAABEIgJAAIgBgJIgBAAQgDAFgGACQgFAEgHAAQgNgBgFgGg");
	this.shape_175.setTransform(123.35,72.75);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgQAbQgIgKAAgRQAAgQAIgKQAJgJAOAAIAKABIAIADIgDAIIgIgCIgHgBQgVAAABAaQgBANAGAHQAFAHAJAAQAJAAAJgEIAAAJQgHAEgLAAQgNAAgJgJg");
	this.shape_176.setTransform(116.45,72.675);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_177.setTransform(106.175,72.675);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgTAjIAAhEIAJAAIABANIABAAQADgHAFgDQAFgFAHAAIAIABIgBAKIgIgBQgJAAgEAHQgHAHABAKIAAAkg");
	this.shape_178.setTransform(100.3,72.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgVAfQgGgGAAgJQAAgVAggBIANAAIAAgFQAAgIgEgDQgDgFgJAAQgHABgLAFIgDgIQAFgDAGgCQAGgBAFAAQANAAAGAGQAGAFAAAMIAAAuIgIAAIgCgJIAAAAQgGAGgFACQgFADgHAAQgLAAgFgFgAgLAFQgFADAAAIQAAAFADADQAEADAGAAQAJAAAGgFQAFgGAAgKIAAgGIgLAAQgLABgGAEg");
	this.shape_179.setTransform(93.35,72.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgXAgIAAgKIAKAEIAMABQAHAAAEgCQAFgDAAgFQAAgEgEgDQgDgDgKgEIgNgFQgFgDgBgEQgDgDAAgFQAAgIAHgFQAHgFALAAQAMAAAKAEIgDAJQgLgEgIAAQgHAAgEACQgDACAAAFIABAEIAFAEIALAFQAMAEAEAEQAFAFAAAHQAAAJgHAGQgIAFgMAAQgOAAgHgEg");
	this.shape_180.setTransform(83.475,72.675);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_181.setTransform(76.725,72.675);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgQAbQgIgKAAgRQAAgQAIgKQAJgJAOAAIAKABIAIADIgDAIIgIgCIgHgBQgVAAABAaQgBANAGAHQAFAHAJAAQAJAAAJgEIAAAJQgHAEgLAAQgNAAgJgJg");
	this.shape_182.setTransform(70.1,72.675);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AATAjIAAgsQAAgIgEgEQgEgEgIgBQgKAAgFAHQgGAFAAAOIAAAjIgKAAIAAhEIAIAAIACAJIABAAQADgEAGgDQAGgEAGAAQAMABAHAGQAGAGAAANIAAAsg");
	this.shape_183.setTransform(62.875,72.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgTAbQgJgKAAgQQAAgQAIgKQAIgKANAAQANAAAIAJQAHAIAAAOIAAAGIgvAAQABAMAGAGQAGAHAJAAQALAAALgFIAAAKIgKADIgMABQgPAAgIgJgAgLgVQgFAGgBAJIAjAAQAAgKgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_184.setTransform(55.225,72.675);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgFAwIAAhFIAKAAIAABFgAgEgiQgBgCAAgEQAAgDABgCQABAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQACACAAADQAAAEgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape_185.setTransform(49.9,71.375);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgWApQgHgKgBgRQABgQAHgKQAIgJANAAQAOAAAHAKIABAAIgBgFIAAgFIAAgcIALAAIAABiIgJAAIgBgKIgBAAQgHALgOAAQgNAAgIgJgAgOgFQgFAGAAANQAAAOAFAGQAFAHAJAAQAKAAAFgGQAFgGAAgNIAAgCQAAgOgFgGQgFgGgKAAQgJAAgFAHg");
	this.shape_186.setTransform(44.1,71.275);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgVAdQgHgGAAgNIAAgsIAKAAIAAAsQAAAIAFAEQADAFAIAAQAKAAAGgHQAEgFAAgOIAAgjIALAAIAABEIgIAAIgCgJIgBAAQgDAFgGACQgFAEgHAAQgNgBgFgGg");
	this.shape_187.setTransform(36.25,72.75);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AAeAuIgMgdIgkAAIgLAdIgLAAIAkhbIAJAAIAkBbgAgDgUIgLAcIAdAAIgLgcIgEgOIgDAOg");
	this.shape_188.setTransform(28.175,71.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#F6F6F6").ss(2,0,0,4).p("EAkkAAAMhJHAAA");
	this.shape_189.setTransform(785,75);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#F6F6F6").ss(1,0,0,4).p("EAAAgrHMAAABWP");
	this.shape_190.setTransform(525,278);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(2,0,0,4).p("AgxhFIBjAAQAIAAAGAGQAGAGAAAIIAABjQAAAJgGAFQgGAGgIAAIhjAAQgIAAgGgGQgGgFAAgJIAAhjQAAgJAGgFQAGgGAIAAg");
	this.shape_191.setTransform(201,396);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#F7F8F9").s().p("AgxBGQgIAAgHgGQgFgFAAgJIAAhjQAAgIAFgGQAHgGAIAAIBjAAQAIAAAGAGQAGAGAAAIIAABjQAAAJgGAFQgGAGgIAAg");
	this.shape_192.setTransform(201,396);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AFXAqIAAgMQAMAGAJAAQANAAAAgIQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgEgEIgJgEQgLgDgEgFQgEgEAAgGQAAgJAGgEQAIgFALAAQALAAALAFIgFAKQgKgEgIAAQgLAAAAAGQAAADADABIANAGQAIADADADQAEADACADQACACAAAGQAAAJgIAFQgHAFgMAAQgNAAgIgEgADmAlQgIgJAAgPQAAgOAIgKQAIgJAOAAQANAAAHAIQAIAIAAAMIAAAIIgrAAQAAAJAEAFQAFAFAJAAIALgBIAKgDIAAALIgKADIgLABQgPAAgKgJgADxgFQgEAEAAAHIAdAAQAAgHgEgEQgEgFgGAAQgGAAgFAFgAAxAqQgHgEgEgIQgEgIAAgKQAAgOAIgJQAIgJAPAAQAOAAAIAJQAIAKAAANQABAQgJAJQgHAJgPAAQgKAAgGgEgAA0gDQgEAFAAAKQAAAXARAAQAQAAAAgXQAAgVgQAAQgJAAgEAGgAgHAaIAAgiIgJAAIAAgGIAKgGIAEgNIAIAAIAAAOIASAAIAAALIgSAAIAAAhQAAAGACACQADACAEAAQAFAAAFgCIAAALIgGABIgHABQgTAAAAgUgAhHAqIAAgMQAMAGAKAAQAMAAAAgIIgBgEIgFgEIgJgEQgLgEgEgEQgEgFAAgFQAAgJAHgEQAHgFALAAQAMAAAKAFIgFAKQgLgEgHAAQgLAAAAAGQAAADADABIANAGQAIACADAEQAEACACAEQABADABAFQgBAJgGAFQgJAFgLAAQgMAAgJgEgAiKAoQgFgGgBgLIAAgqIAOAAIAAAnQAAAIADADQAEAEAGAAQAIAAAFgFQAEgFAAgNIAAgfIAOAAIAABAIgLAAIgCgJIgBAAQgDAFgFADQgGACgGAAQgMAAgGgGgAjHAmQgHgJAAgQQAAgPAHgJQAJgJAPAAQALAAAIAEIgFALQgIgDgGAAQgRAAAAAVQAAALAEAFQAEAGAJAAQAJAAAIgFIAAAMIgIADIgKABQgPAAgIgIgAEnAtIAAhAIALAAIACAMIABAAQACgGAGgEQAGgDAFAAIAHABIgBAMIgGAAQgJAAgFAFQgFAEAAAJIAAAigADBAtIAAgoQAAgGgDgEQgCgEgGAAQgJAAgEAFQgDAEAAALIAAAiIgOAAIAAgoQAAgGgDgEQgCgEgHAAQgHAAgEAFQgEAFAAAMIAAAgIgNAAIAAhAIAKAAIACAJIAAAAQAEgFAEgCQAFgDAHAAQAPAAAFAKIABAAQACgEAGgDQAEgDAHAAQANAAAFAGQAFAGAAALIAAAqgAkLAtIAAhaIANAAIAABagAktAtIAAhaIAOAAIAABagAlGAtIgIgYIggAAIgJAYIgPAAIAhhVIAOAAIAhBVgAljgMIgIAVIAaAAIgNglQgCAJgDAHg");
	this.shape_193.setTransform(259.05,396.525);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#16191C").s().p("ACKApQgJgJAAgSQAAgQAJgJQAIgLAPABQAOAAAIAIQAIAJAAANIAAAIIgvAAQABALAFAFQAFAGAKAAIALgBIAMgFIAAAMQgFADgGABQgGABgHAAQgQABgKgKgACWgFQgFAEAAAHIAfAAQAAgIgEgDQgDgFgIAAQgHAAgEAFgABTAcIAAglIgJAAIAAgGIAKgGIAFgPIAJAAIAAAQIAUAAIAAALIgUAAIAAAkQAAAHADABQACADAFAAIALgCIAAAMIgGACIgIAAQgWABAAgXgAiLAuQgGgEgFgJQgEgJAAgKQAAgQAJgKQAIgJAQAAQAPgBAJALQAJAKAAAPQAAARgJAKQgIAKgQgBQgKAAgIgEgAiHgDQgEAGAAALQAAAYASAAQASAAAAgYQAAgXgSgBQgJABgFAGgADQAxIAAhFIAMAAIACAMIABAAQADgHAGgDQAGgDAGAAIAHAAIgBAOIgHgBQgJAAgFAGQgGAEAAALIAAAkgAAuAxIAAhiIAPAAIAABigAAJAxIAAhFIAPAAIAABFgAgiAxIAAg6IgLAAIAAgHIALgFIAAgEQAAgMAGgHQAGgFAMAAQAHgBAHADIgDALIgKgCQgFABgCADQgDAEAAAFIAAAFIARAAIAAALIgRAAIAAA6gAjAAxIgthJIgBAAIABAEIAABFIgNAAIAAhcIASAAIAuBJIAAAAIgBhJIAOAAIAABcgAALghQgDgBAAgFQAAgEADgCQACgCAEAAQAEAAACACQACADAAADQAAAEgCACQgCACgEABQgEgBgCgCg");
	this.shape_194.setTransform(647.275,106.15);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#16191C").s().p("AgFAgIg0g0QgDgDAAgDQAAgIAIAAQAEAAACACIAuAwIAvgwQACgCAEAAQAIAAAAAIQAAADgDADIg0A0QgCADgEAAQgCAAgDgDg");
	this.shape_195.setTransform(968.975,105.85);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#EAEDEF").s().p("A8qC0QgiAAgWgYQgYgXAAghIAAjHQAAghAYgYQAWgXAiAAMA5VAAAQAhAAAXAXQAYAYAAAhIAADHQAAAhgYAXQgXAYghAAg");
	this.shape_196.setTransform(799.5,105.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#16191C").s().p("AizA/IAAgLIAIAAQAKAAAFgNIACgGIgchFIARAAIASA3IABAAIACgJIAQguIAQAAIgeBPQgIAVgTAAIgKgBgADcAZQgIgJAAgQQAAgSAJgKQAIgJARAAQAKAAAKADIgFAMQgJgDgGAAQgTAAAAAYQAAALAFAGQAEAGAJAAQAJAAAKgFIAAANIgJAEIgLABQgPAAgJgKgAgSAcQgGgEAAgLQAAgMAIgDQAJgGAPAAIAMgBIAAgEQAAgGgDgEQgDgDgHAAIgJABIgKAFIgFgMQAGgDAHgBIAMgBQANAAAHAFQAHAGAAAMIAAAvIgLAAIgDgKIAAAAQgFAHgGACQgGACgGABQgKAAgGgHgAALAAQgKAAgFADQgEAEAAAGQAAAEADADQACADAFAAQAIAAAFgEQAFgFAAgIIAAgGgAC0AhIAAhFIAPAAIAABFgACQAhIAAgqQAAgIgDgFQgEgEgGABQgIAAgEAFQgEAHAAAKIAAAkIgPAAIAAgqQAAgIgDgFQgDgEgHABQgIgBgFAHQgDAEAAAOIAAAiIgPAAIAAhFIALAAIACAJIABAAQADgFAGgDQAFgCAHAAQAQAAAFALIABAAQADgGAGgDQAGgCAHAAQAMgBAGAHQAGAGAAAOIAAAsgAg3AhIAAgqQAAgIgDgFQgEgEgGABQgKgBgEAHQgEAFAAANIAAAiIgPAAIAAhFIALAAIACAJIABAAQADgFAGgDQAGgCAHAAQAZAAAAAaIAAAsgAkJAhIAAhcIAdAAQAWAAAMAMQANANAAAUQAAAXgNAMQgNAMgYAAgAj6AUIALAAQAiAAAAghQAAghggAAIgNAAgAC1gxQgCgBAAgFQAAgDACgDQACgCAEAAQAFAAACACQACACAAAEQAAAFgCABQgDADgEAAQgDAAgDgDg");
	this.shape_197.setTransform(231.475,272.25);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#16191C").s().p("AgFAgIg0g0QgDgCAAgDQAAgEADgDQACgCADAAQAEAAACACIAuAwIAvgwQACgCAEAAQADAAACACQADADAAAEQAAADgDACIg0A0QgCADgEAAQgCAAgDgDg");
	this.shape_198.setTransform(490.825,270.35);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#EAEDEF").s().p("A3bC0QghAAgYgYQgXgWAAgiIAAjHQAAghAXgXQAYgYAhAAMAu3AAAQAhAAAXAYQAYAXAAAhIAADHQAAAigYAWQgXAYghAAg");
	this.shape_199.setTransform(351,270);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#727272").s().p("AHHApQgIgKgBgRQAAgRAJgJQAIgJAQAAQAOgBAHAJQAJAIgBAOIAAAIIgvAAQABAKAGAGQAEAFAKAAIAMgBQAFAAAGgEIAAAMIgLAEIgNABQgQAAgKgJgAHTgGQgEAEgBAIIAgAAQAAgIgFgEQgDgEgHgBQgIABgEAEgAGGApQgIgKAAgRQAAgRAIgJQAKgJAQAAQAMAAAHADIgEANQgKgFgFAAQgSABAAAXQAAALAEAHQAFAFAIABQALgBAIgFIAAANQgFAEgDAAIgLABQgQAAgJgJgADqApQgJgKAAgRQgBgQAJgKQAJgJAOAAQAPgBAIAJQAHAIABAOIAAAIIgvAAQAAAJAGAHQAEAFAKAAIAMgBQAEAAAHgEIAAAMIgLAEIgMABQgRAAgJgJgAD2gGQgEAEgCAIIAgAAQAAgHgEgFQgEgEgIgBQgGABgEAEgAByApQgGgJAAgSQAAgQAGgKQAIgJAOAAQAOgBAGAKIABAAIgBglIAPAAIAABiIgMAAIgCgJIgBAAQgHAKgOAAQgNAAgIgJgAB/gDQgFAFAAAMQAAAMAFAGQAEAGAIAAQAIAAAGgFQAEgFAAgMIAAgCQAAgNgEgFQgFgFgJgBQgIABgEAGgAAjArQgHgFABgOIAAgsIAPAAIAAAqQAAAHADAFQADAEAHAAQAJAAAFgGQAEgFAAgNIAAgiIAPAAIAABFIgMAAIgCgJIgBAAQgCAFgHACQgFADgHAAQgNAAgGgHgAifApQgKgKAAgRQAAgQAJgKQAIgJAPAAQAOgBAIAJQAJAJAAANIAAAIIgvAAQgBAJAGAHQAFAFAKAAIALgBQAEAAAIgEIAAAMIgLAEIgNABQgQAAgJgJgAiUgGQgEAEgBAIIAfAAQAAgHgDgFQgFgEgHgBQgHABgEAEgAjWAbIAAgkIgKAAIAAgHIALgFIAEgPIAJAAIAAAQIAVAAIAAALIgVAAIAAAkQAAAFADADQADADAFAAQAFAAAGgCIAAAMIgHACIgIAAQgWAAABgXgAkjAsQgFgFAAgKQAAgLAIgGQAJgFAPgBIANAAIAAgEQAAgFgEgEQgDgDgHgBQgGAAgEACIgJAEIgFgKQAGgEAHgBIAMgBQAOAAAHAFQAGAGAAAMIAAAvIgLAAIgCgKIgBAAQgEAGgGADQgFACgIAAQgKAAgHgGgAkEAPQgLACgFACQgFADAAAHQAAAFADACQACADAHAAQAHAAAFgFQAFgFABgHIAAgHgAlpApQgKgKAAgRQAAgQAJgKQAJgJAPAAQAOgBAIAJQAIAJAAANIAAAIIgvAAQABALAFAFQAEAFAKAAIAMgBIALgEIAAAMIgKAEIgOABQgQAAgJgJgAldgGQgFAEgBAIIAgAAQAAgHgEgFQgDgEgIgBQgIABgDAEgAnxAmQgKgMgBgXQAAgOAGgLQAFgLAKgFQAKgGANgBQAPABAMAGIgGAMIgKgEQgEgBgHAAQgMAAgIAJQgHAJAAAQQgBAQAIAKQAHAIANAAIAMgBIAMgDIAAANQgMAEgNAAQgVAAgLgMgAFfAxIAAgrQAAgIgEgDQgDgFgHAAQgKABgEAFQgEAFgBANIAAAjIgPAAIAAhFIANAAIABAJIABAAQADgFAGgDQAFgDAIABQAZgBAAAZIAAAugADAAxIAAhFIAQAAIAABFgAACAxIgIgaIgkAAIgJAaIgQAAIAjhdIARAAIAiBdgAgdgNIgIAXIAbAAIgMggIgBgIIgGARgAmmAxIAAhFIALAAIACAMIABAAQADgGAGgEQAFgEAIABIAHAAIgCAOIgGgBQgJAAgGAGQgGAGAAAIIAAAlgADBghQgCgDAAgDQAAgEACgCQADgCAEgBQAEABACACQACACABAEQgBAEgCACQgCACgEAAQgFAAgCgCg");
	this.shape_200.setTransform(292.55,520.15);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#EAEDEF").s().p("AsuCgQhCAAgvgvQgvgvAAhCQAAhBAvgvQAvgvBCAAIZdAAQBCAAAvAvQAvAvAABBQAABCgvAvQgvAvhCAAg");
	this.shape_201.setTransform(290.5,520);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#DEDEDE").s().p("AgpAqQgSgRAAgZQAAgXASgSQARgSAYAAQAZAAARASQASASAAAXQAAAZgSARQgRASgZAAQgXAAgSgSgAgOAdQAAAFAEAAIAYAAQAEAAAAgFQAAgEgEAAIgIAAIAAgeQAAgFgEAAIgLAAQgEAAAAAEQAAAEAEAAIAHAAIAAAbIgIAAQgEAAAAAEgAgFgiQgDACAAAEQAAADADACQACADADAAQAHAAAAgIQAAgIgHAAQgDAAgCACg");
	this.shape_202.setTransform(158.975,337.775);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#16191C").s().p("AHAAzQgGgCgGgFQgFgGgCgHQgCgGAAgLQAAgNAEgHQAEgIAIgFQAJgFAKAAQALAAAIAFQAIAFAEAIQAFAIAAAMQAAALgDAGQgCAHgFAGQgEAEgHADQgHADgIAAQgHAAgHgDgAHAgEQgFAGAAAMQAAAJACAGQACAFAEAEQAFADAGAAQAHAAAEgDQAFgDABgGQACgGAAgJQAAgIgCgGQgBgEgFgDQgEgDgHAAQgKAAgEAGgAFbAsQgIgLAAgSQAAgSAJgLQAIgKAOAAQAFAAAFACQAEABADADIAFAGIABAAIgBgGIAAgjIAQAAIAABpIgNAAIgDgKIAAAAIgFAGIgIAEQgEACgGAAQgOAAgIgKgAFogDQgEAGAAAMQAAANAEAGQAFAHAJAAQAKAAAEgGQAFgGAAgMIAAgCQAAgNgEgGQgFgGgKAAQgKAAgEAHgAhQAyQgIgFgFgIQgFgJAAgNQAAgMAFgIQAEgJAIgFQAHgFALAAQALAAAGAFQAHADAEAIQAEAHAAALIAAAIIgyAAQAAALAGAGQAGAGAKAAQAHAAAGgBIAMgEIAAANIgMAEIgOABQgLAAgJgEgAhLgHQgFAGgBAIIAjAAQAAgEgCgFQgBgEgFgDQgEgDgFAAQgHAAgFAFgAknAzQgHgDgFgEQgEgGgDgHQgDgIAAgJQAAgMAFgIQAEgIAIgFQAIgFALAAQALAAAIAFQAIAFAEAIQAFAIAAAMQAAAJgDAIQgCAHgFAGQgEAEgHADQgIADgHAAQgIAAgGgDgAkogEQgEAGAAAMQAAAHACAIQACAGAEADQAFADAGAAQAHAAAEgDQAEgDACgGQACgGAAgJQAAgIgCgGQgCgEgEgDQgEgDgHAAQgKAAgFAGgAljA0QgFgCgDgGQgDgFAAgJIAAgoIgKAAIAAgHIALgGIAFgQIAKAAIAAARIAWAAIAAAMIgWAAIAAAoQAAAFADADQADADAFAAIAGgBIAFgBIAAAMIgGACIgJABQgHAAgFgCgAmuA1QgHgCgDgCIAAgOQAFADAHACQAGACAGAAQAIAAAEgDQADgDAAgEQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAAAgBIgFgEIgLgFIgNgGQgFgDgCgEQgCgDAAgGQAAgKAHgFQAJgGANAAQAHAAAGACIAMAEIgFAMIgLgEQgEgBgGAAQgHAAgCACQgEABAAAEQAAABAAAAQAAABABABQAAAAAAABQAAAAABAAIAFADQAEADAHACIAMAFQAFADACAEQADAFAAAGQAAAHgEAFQgDAFgHADQgIADgJAAgAoBAzQgHgDgCgGQgDgGAAgKIAAgwIAQAAIAAAtQAAAKADADQAEAFAHAAQAIAAAEgDQAFgEABgFQACgIAAgHIAAgkIAQAAIAABKIgMAAIgDgKIgBAAQgCAFgEACIgIAEIgJABQgIAAgHgDgApVAwQgJgHgGgLQgFgMAAgPQAAgKADgKQAEgJAGgIQAGgGAIgEQAJgEAMAAIAPACQAHABAGAEIgGANIgLgEQgFgCgGAAQgIAAgFADQgGACgEAFQgDAFgDAHQgCAJAAAGQAAAMAEAIQADAHAHAFQAHAFAKAAIAMgBIAMgEIAAAOIgMAEIgOABQgPAAgLgGgAJCA0IgQg8IAAAAIgRA8IgRAAIgWhKIARAAIAKAkIAEAYIABAAIABgLIAOgxIASAAIAPA8IABAAIABgHIAOg1IAQAAIgWBKgAExA0IAAguQAAgHgDgFQgEgEgIAAQgLAAgEAGQgEAGAAANIAAAlIgQAAIAAhKIAMAAIADAKIAAAAQADgEADgCIAJgEQAEgCAFAAQAMAAAIAHQAHAGAAAOIAAAxgADYA0IAAhKIAQAAIAABKgACfA0IgRg6IgEgRIAAgFIgBAEIgUBMIgSAAIgahiIAQAAIAQA/IAEATIAAgGIAVhMIAQAAIAVBSIADgRIARhBIAQAAIgaBigAgMA0IAAhKIAMAAIABANIABAAQACgEAEgDQADgEAEgCIAKgCIAIABIgCAPIgHgBIgIACQgEABgDADQgDADgCADQgBAEAAAGIAAAngAiEA0IAAguQAAgIgDgEQgDgEgHAAQgKAAgEAGQgEAFAAALIAAAoIgQAAIAAguQAAgGgCgDQgBgDgDgDQgDgBgFAAQgGAAgEADQgEADgCAEQgCAGAAAJIAAAlIgQAAIAAhKIANAAIACAKIABAAQACgEAEgCIAHgEIAJgCQAJAAAFADQAGADADAGIABAAQAEgGAGgDQAHgDAHAAQAMAAAHAHQAGAGAAAOIAAAxgADZgjQgCgDAAgEQAAgFACgCIAHgCIAGACQADACAAAFQAAAEgDADQgDABgDAAQgEAAgDgBg");
	this.shape_203.setTransform(86.575,337.775);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#DEDEDE").s().p("AgpAqQgSgRAAgZQAAgXASgSQARgSAYAAQAZAAARASQASASAAAXQAAAZgSARQgRASgZAAQgXAAgSgSgAgOAdQAAAFAEAAIAYAAQAEAAAAgFQAAgEgEAAIgHAAIAAgeQAAgFgFAAIgLAAQgEAAAAAEQAAAEAEAAIAHAAIAAAbIgIAAQgEAAAAAEgAgHgcQAAAIAHAAQAHAAAAgIQAAgIgHAAQgHAAAAAIg");
	this.shape_204.setTransform(70.975,269.775);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#16191C").s().p("AB+AyQgHgEgHgJQgEgJAAgNQAAgMAEgIQAEgJAJgFQAGgFAMAAQAJAAAIAFQAIAEADAHQAEAIAAAKIAAAIIgyAAQAAALAFAGQAGAGAKAAQAIAAAFgBIAMgEIAAANIgMAEIgNABQgLAAgJgEgACCgHQgEAFgBAJIAiAAQAAgGgCgDQgCgFgDgCQgEgDgFAAQgHAAgGAFgAAhAsQgIgKAAgTQAAgTAIgKQAJgKANAAQAHAAADACQAFABADADIAFAGIAAAAIgBgpIAQAAIAABpIgMAAIgDgKIgBAAIgFAGIgHAEQgEACgGAAQgOAAgIgKgAAugDQgFAGAAAMQAAANAFAGQAFAHAIAAQALAAAEgGQAEgHAAgLIAAgCQAAgOgEgFQgDgGgMAAQgJAAgEAHgAgiAzQgFgCgGgFQgGgGgBgHQgDgHgBgKQAAgMAFgIQAEgIAIgFQAJgFAKAAQALAAAIAFQAIAFAEAIQAEAIAAAMQAAALgDAGQgBAHgGAGQgEAEgGADQgIADgHAAQgIAAgGgDgAgigEQgFAGAAAMQAAAHACAIQACAGAEADQAFADAGAAQAHAAAFgDQADgDACgGQACgGABgJQgBgIgCgGQgCgEgDgDQgFgDgHAAQgJAAgFAGgAhXA0IABhSIgBAAIgdBSIgPAAIgdhSIAAAAIABBSIgPAAIAAhiIAXAAIAcBOIAAAAIAchOIAYAAIAABig");
	this.shape_205.setTransform(42.8,269.775);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#16191C").s().p("AAGAyIAAhSIgEADIgOANIgIgKIAcgXIANAAIAABjg");
	this.shape_206.setTransform(564.2,106.05);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#DEDEDE").s().p("AgpAqQgSgRAAgZQAAgXASgSQASgSAXAAQAZAAARASQASASAAAXQAAAZgSARQgRASgZAAQgXAAgSgSgAgOAdQAAAFAFAAIAXAAQAFAAAAgFQAAgEgFAAIgHAAIAAgeQAAgFgFAAIgKAAQgFAAAAAEQAAAEAFAAIAGAAIAAAbIgHAAQgFAAAAAEgAgHgcQAAAIAHAAQAHAAAAgIQAAgIgHAAQgHAAAAAIg");
	this.shape_207.setTransform(612.975,49.775);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#16191C").s().p("ACbA1IgLgEIAAgOQAFADAHACQAGACAHAAQAHAAAEgDQAEgDAAgEQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAgBgBQgCgDgDgBQgGgDgFgCIgMgGQgFgDgDgEQgCgEAAgFQAAgKAIgFQAIgGANAAQAHAAAGACIAMAEIgFAMIgKgEIgLgBQgGAAgDACQgDABAAAEIABAEIAGADIAWAKQAEADAEAEQACAFAAAGQAAAIgDAEQgEAFgHADQgFADgMAAgAAVAyQgJgFgEgIQgFgKAAgMQAAgNAEgHQAFgJAHgFQAIgFALAAQAKAAAHAFQAGADAFAIQAEAHAAALIAAAIIgzAAQABALAFAGQAGAGAKAAQAHAAAGgBIAMgEIAAANQgEACgHACIgOABQgLAAgJgEgAAZgHQgEAGgBAIIAiAAQAAgGgCgDQgBgEgEgDQgEgDgFAAQgIAAgFAFgAgiA0QgFgCgDgGQgDgFAAgJIAAgoIgLAAIAAgHIALgGIAGgQIAKAAIAAARIAVAAIAAAMIgVAAIAAAoQAAAFADADQADADAEAAIAGgBIAGgBIAAAMIgHACIgJABQgHAAgEgCgABYA0IAAhKIANAAIACANIABAAQACgEADgDIAIgGIAJgCIAJABIgCAPIgHgBIgIACIgHAEQgDACgCAEQgCAEAAAGIAAAngAhWA0IAAhpIAQAAIAABpgAh9A0IAAhKIAQAAIAABKgAjGA0IAAhiIA4AAIAAANIgoAAIAAAgIAmAAIAAAMIgmAAIAAApgAh8gkQgCgBAAgFQAAgFACgCIAHgCQADAAADACQADACAAAFQAAAFgDABQgCACgEAAQgEAAgDgCg");
	this.shape_208.setTransform(582.225,49.775);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#DEDEDE").s().p("AgpAqQgSgRAAgZQAAgXASgSQARgSAYAAQAZAAARASQASASAAAXQAAAZgSARQgRASgZAAQgXAAgSgSgAgOAdQAAAFAEAAIAYAAQAEAAAAgFQAAgEgEAAIgIAAIAAgeQAAgFgEAAIgLAAQgEAAAAAEQAAAEAEAAIAHAAIAAAbIgIAAQgEAAAAAEgAgFgiQgDACAAAEQAAADADACQACADADAAQAHAAAAgIQAAgIgHAAQgDAAgCACg");
	this.shape_209.setTransform(140.975,201.775);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#16191C").s().p("AHiAyQgHgEgGgJQgFgJAAgNQAAgMAEgIQAFgJAIgFQAHgFALAAQAKAAAHAFQAIAEADAHQAEAIAAAKIAAAIIgyAAQAAALAGAGQAFAGAKAAQAIAAAFgBIAMgEIAAANIgLAEIgOABQgLAAgJgEgAHmgHQgEAFgBAJIAiAAQAAgGgBgDIgGgHQgEgDgFAAQgHAAgGAFgAEEAzQgFgCgDgFQgEgGAAgHQAAgMAJgGQAIgFATgBIANgBIAAgEQAAgHgEgDQgDgDgHAAIgLABIgLAEIgFgLQAHgDAGgCQAJgCAFAAQAOAAAIAHQAIAGAAANIAAAyIgMAAIgDgKIgBAAIgGAHQgEADgEAAQgFACgGAAQgHAAgFgDgAEfARQgMAAgFAEQgFAEAAAGQAAAFADADQAEADAFAAQAJAAAFgFQAGgFAAgJIAAgHgAApAyQgIgEgGgJQgEgJAAgNQAAgMAEgIQAEgJAIgFQAHgFALAAQAKAAAIAFQAHAEAEAHQAEAIAAAKIAAAIIgzAAQAAALAGAGQAGAGAKAAQAIAAAFgBIAMgEIAAANIgMAEIgOABQgKAAgJgEgAAtgHQgEAFgBAJIAiAAQAAgGgCgDQgCgFgDgCQgEgDgGAAQgGAAgGAFgAgeAyQgIgFgEgIQgEgJAAgNQAAgOAFgIQAFgIAIgEQAIgFALAAQAHAAAEACIAJADIgFANIgHgDIgJgBQgGAAgFADQgEACgCAFQgCAGAAAJQAAAJACAFQACAGAEADQAEACAHAAIAKgBIAJgEIAAAOIgJAEIgLABQgKAAgJgEgAjGAyQgIgFgFgIQgFgKAAgMQAAgNAFgHQAEgJAIgFQAIgFAKAAQALAAAGAFQAHADAFAIQADAHAAALIAAAIIgyAAQAAALAGAGQAGAGAKAAQAHAAAGgBQAHgCAFgCIAAANIgMAEIgOABQgLAAgJgEgAjBgHQgFAGgBAIIAjAAQAAgGgCgDQgBgEgFgDQgEgDgFAAQgHAAgFAFgAlOAsQgIgKAAgTQAAgTAIgKQAJgKANAAQAGAAAEACQAFABADADIAFAGIABAAIgBgpIAQAAIAABpIgNAAIgDgKIAAAAIgGAGIgHAEQgEACgGAAQgOAAgIgKgAlBgDQgEAGAAAMQAAANAEAGQAFAHAIAAQALAAAEgGQAEgHAAgLIAAgCQAAgOgEgFQgDgGgMAAQgJAAgEAHgAmfAzQgGgDgDgGQgDgGAAgKIAAgwIAQAAIAAAtQAAAKAEADQAEAFAHAAQAIAAADgDQAEgDADgGQABgGAAgJIAAgkIARAAIAABKIgNAAIgCgKIgBAAQgDAFgDACIgIAEIgKABQgIAAgHgDgAGuA0IAAguQAAgHgDgFQgDgEgHAAQgKAAgEAGQgEAEAAAMIAAAoIgQAAIAAguQAAgGgCgDQgBgEgDgBQgDgCgFAAQgGAAgFADQgEADgBAEQgCAGAAAJIAAAlIgQAAIAAhKIANAAIACAKIABAAQACgEADgCQADgDAFgBQAEgCAFAAQAIAAAGADQAHADACAGIABAAQAEgGAGgDQAGgDAIAAQALAAAIAHQAGAGAAAOIAAAxgADRA0IgxhOIgBAAIACBOIgPAAIAAhiIAUAAIAxBOIAAAAIgBhOIAPAAIAABigAhQA0IAAguQAAgIgEgEQgDgEgIAAQgLAAgEAGQgEAGAAANIAAAlIgQAAIAAhKIAMAAIACAKIABAAQACgEAEgCQADgDAFgBIAKgCQANAAAHAHQAHAGAAAOIAAAxgAj6A0IAAhKIAQAAIAABKgAnHA0IgKgbIgmAAIgKAbIgRAAIAlhjIASAAIAlBjgAnzALIAeAAIgOgmIgBgGgAj5gjQgCgDAAgEQAAgFACgCIAHgCIAGACQADACAAAFQAAAFgDACQgDABgDAAQgEAAgDgBg");
	this.shape_210.setTransform(77.125,201.775);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#9A9FA7").s().p("AFBAkQgIgMAAgVQAAgUAIgLQAKgQASAAQATAAAIAQQAJALgBAUQABAVgJAMQgIAPgTAAQgTAAgJgPgAFPgaQgIAJAAAUQAAAVAIAJQAFAFAJABQAIgBAGgFQAIgJAAgVQAAgUgIgJQgGgFgIAAQgJAAgFAFgADsAkQgIgMAAgVQAAgUAIgLQAJgQATAAQARAAALAQQAHALABAUQgBAVgHAMQgKAPgSAAQgTAAgJgPgAD5gaQgIAJAAAUQAAAVAIAJQAGAFAJABQAIgBAGgFQAIgJAAgVQAAgUgIgJQgGgFgIAAQgKAAgFAFgACWAkQgIgMAAgVQAAgTAIgMQAJgQATAAQASAAAKAQQAIALAAAUQAAAVgIAMQgKAPgSAAQgTAAgJgPgACkgaQgIAKAAATQAAAVAIAJQAFAFAJABQAIgBAHgFQAHgJABgVQgBgUgHgJQgGgFgJAAQgJAAgFAFgABBAkQgIgMAAgVQAAgUAIgLQAKgQASAAQATAAAJAQQAIAMAAATQAAAVgIAMQgJAPgTAAQgSAAgKgPgABOgaQgHAJgBAUQABAVAHAJQAHAFAIABQAIgBAGgFQAIgJAAgVQAAgUgIgJQgGgFgIAAQgJAAgGAFgAhFAkQgIgMAAgVQAAgUAIgLQAJgQATAAQASAAAJAQQAJAMAAATQAAAVgJAMQgJAPgSAAQgTAAgJgPgAg4gaQgIAJAAAUQAAAVAIAJQAGAFAJABQAIgBAGgFQAHgJAAgVQAAgTgHgKQgGgFgIAAQgKAAgFAFgAibAkQgIgMAAgVQAAgUAIgLQAKgQASAAQASAAAKAQQAIALAAAUQAAAVgIAMQgKAPgSAAQgTAAgJgPgAiNgaQgIAJAAAUQAAAVAIAJQAFAFAJABQAIgBAHgFQAHgJABgVQgBgUgHgJQgGgFgJAAQgJAAgFAFgAkiAkQgJgMAAgVQAAgUAJgLQAKgQARAAQASAAAKAQQAJALgBAUQABAVgJAMQgJAPgTAAQgSAAgJgPgAkVgaQgIAJAAAUQAAAVAIAJQAGAFAIABQAJgBAGgFQAIgJAAgVQAAgUgIgJQgFgFgKAAQgJAAgFAFgAl3AkQgIgMAAgVQAAgUAIgLQAJgQASAAQASAAAKAQQAIALAAAUQAAAVgIAMQgKAPgSAAQgSAAgJgPgAlqgaQgIAJAAAUQAAAVAIAJQAGAFAIABQAJgBAFgFQAJgJgBgVQABgUgJgJQgFgFgJAAQgJAAgFAFgAgEAxIAvhiIANAAIgxBigAjhAxIAwhiIANAAIgwBig");
	this.shape_211.setTransform(374.15,338.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#EAEDEF").s().p("AnpC0QgiAAgWgXQgYgXAAgiIAAjHQAAghAYgYQAWgXAiAAIPTAAQAhAAAXAXQAYAYAAAhIAADHQAAAigYAXQgXAXghAAg");
	this.shape_212.setTransform(380,338);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#16191C").s().p("AAJAdQgHgHAAgLQAAgLAHgGQAGgIALAAQALAAAHAIQAHAGAAALQAAALgHAHQgHAHgLAAQgLAAgGgHgAAQgBQgFADAAAJQAAAIAFAEQAEAFAGAAQAHAAAEgFQAEgEAAgIQAAgJgEgDQgEgEgHAAQgGAAgEAEgAgaAiIAAg8IgYAAIAAgJIA4AAIAAAJIgWAAIAAA8g");
	this.shape_213.setTransform(328.175,311.55);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#9A9FA7").s().p("AFBAkQgIgMAAgVQAAgUAIgLQAKgQASAAQATAAAJAQQAIALAAAUQAAAVgIAMQgJAPgTAAQgSAAgKgPgAFPgaQgIAJAAAUQAAAVAIAJQAGAFAIABQAIgBAGgFQAIgJAAgVQAAgUgIgJQgFgFgJAAQgJAAgFAFgADsAkQgIgMAAgVQAAgUAIgLQAKgQASAAQASAAAKAQQAIALAAAUQAAAVgIAMQgKAPgSAAQgTAAgJgPgAD5gaQgIAJAAAUQAAAVAIAJQAGAFAJABQAIgBAGgFQAIgJAAgVQAAgUgIgJQgFgFgJAAQgJAAgGAFgACXAkQgJgMAAgVQAAgTAJgMQAJgQASAAQASAAAKAQQAIALAAAUQAAAVgIAMQgJAPgTAAQgSAAgJgPgACkgaQgIAKAAATQAAAVAIAJQAGAFAIABQAJgBAGgFQAIgJAAgVQAAgUgIgJQgGgFgJAAQgJAAgFAFgABBAkQgIgMAAgVQAAgUAIgLQAKgQASAAQATAAAJAQQAIAMAAATQAAAVgIAMQgJAPgTAAQgSAAgKgPgABPgaQgIAJAAAUQAAAVAIAJQAGAFAIABQAIgBAGgFQAIgJAAgVQAAgUgIgJQgFgFgJAAQgJAAgFAFgAhFAkQgIgMAAgVQAAgUAIgLQAKgQASAAQASAAAJAQQAJAMAAATQAAAVgJAMQgJAPgSAAQgTAAgJgPgAg4gaQgIAJAAAUQAAAVAIAJQAGAFAJABQAIgBAGgFQAIgJAAgVQAAgTgIgKQgFgFgJAAQgJAAgGAFgAibAkQgIgMAAgVQAAgUAIgLQAKgQASAAQASAAAKAQQAIALAAAUQAAAVgIAMQgJAPgTAAQgSAAgKgPgAiNgaQgIAJAAAUQAAAVAIAJQAGAFAIABQAJgBAGgFQAIgJAAgVQAAgUgIgJQgGgFgJAAQgJAAgFAFgAkiAkQgIgMAAgVQAAgUAIgLQAKgQASAAQASAAAKAQQAIALAAAUQAAAVgIAMQgKAPgSAAQgTAAgJgPgAkVgaQgIAJAAAUQAAAVAIAJQAGAFAJABQAIgBAGgFQAIgJAAgVQAAgUgIgJQgFgFgJAAQgJAAgGAFgAl3AkQgJgMAAgVQAAgTAJgMQAKgQARAAQASAAAKAQQAIALAAAUQAAAVgIAMQgJAPgTAAQgSAAgJgPgAlqgaQgIAJAAAUQAAAVAIAJQAGAFAIABQAJgBAGgFQAIgJAAgVQAAgUgIgJQgGgFgJAAQgIAAgGAFgAgEAxIAvhiIANAAIgwBigAjhAxIAwhiIANAAIgwBig");
	this.shape_214.setTransform(244.125,338.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#EAEDEF").s().p("AnpC0QghAAgYgXQgXgXAAgiIAAjHQAAghAXgYQAYgXAhAAIPTAAQAhAAAYAXQAXAYAAAhIAADHQAAAigXAXQgYAXghAAg");
	this.shape_215.setTransform(250,338);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#16191C").s().p("AgQAdQgHgHAAgLQAAgLAHgGQAGgIAKAAQALAAAHAIQAHAGAAALQAAALgHAHQgHAHgLAAQgKAAgGgHgAgJgBQgFADAAAJQAAAIAFAEQAEAFAFAAQAHAAAEgFQAEgEABgIQgBgJgEgDQgEgEgHAAQgFAAgEAEgABjAiIAAgeQAAgKgKABQgLgBAAALIAAAdIgKAAIAAgeQAAgKgLABQgKAAgBALIAAAcIgJAAIAAgvIAJAAIAAAHQAFgIAKAAQALAAADAKQAFgKALAAQAHAAAFAEQAFAFAAAIIAAAfgAg3AiIAAgvIAJAAIAAAJQAEgJAKAAIAEAAIAAAKIgFAAQgNAAAAAOIAAAXgAhrAiIAAhFIAsAAIAAAJIgiAAIAAAXIAeAAIAAAIIgeAAIAAAdg");
	this.shape_216.setTransform(204.65,311.55);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#ADADB1").s().p("AHYAyQgJgGgFgIQgEgHAAgOQAAgOAEgHQAFgIAHgFQAJgFAKAAQAKABAHAEQAHAEAEAHQAEAIAAAKIAAAIIgzAAQABAMAFAFQAGAHAKAAQAHgBAGgBIAMgFIAAAOIgLADQgHACgIAAQgKAAgJgEgAHcgHQgEAGgBAIIAiAAQAAgGgCgDQgBgEgEgDQgFgDgEABQgJAAgEAEgAD5A0QgEgCgEgGQgDgFAAgIQAAgMAJgGQAJgFARgBIANAAIAAgFQAAgGgDgEQgFgEgFABIgLACIgLADIgFgLQAGgDAGgBQAHgCAIgBQAPAAAHAHQAHAGAAAMIAAAzIgLAAIgEgKIAAAAIgGAHQgEACgEABQgFACgGAAQgGAAgHgCgAEDAVQgEAEAAAGQgBAGAEACQADACAGABQAIgBAGgEQAFgEAAgKIAAgGIgKAAQgLAAgGAEgAAzAyQgJgFgEgJQgFgHAAgOQAAgNAFgIQADgIAIgFQAIgFALAAQAJABAIAEQAHAFAEAGQAEAIAAAKIAAAIIgzAAQAAAMAHAFQAFAHAKAAQAIgBAFgBIAMgFIAAAOQgHADgEAAQgHACgIAAQgLAAgIgEgAA3gHQgEAFgBAJIAiAAQAAgGgBgDQgDgFgDgCQgEgDgFABQgIAAgFAEgAgUAyQgGgEgFgJQgEgKgBgMQAAgOAFgIQAEgHAJgFQAJgEAJgBQAHAAAFACQAGABAEACIgGANIgIgDIgIgBQgGAAgFADQgEACgCAFQgCAGAAAJQAAAIACAGQACAFAEADQAFAEAGAAQAFAAAGgCIAJgEIAAAOQgFADgEAAQgGACgGAAQgKAAgJgEgAi7AyQgKgGgEgIQgEgIAAgNQgBgNAFgIQAEgIAIgFQAJgFAJAAQALABAGAEQAHAEAFAHQADAIABAKIAAAIIgzAAQABAMAFAFQAGAHAKAAQAHgBAGgBIAMgFIAAAOIgMADQgFACgJAAQgLAAgIgEgAi3gHQgEAGgCAIIAjAAQAAgGgCgDQgCgEgEgDQgDgDgGABQgHAAgFAEgAlEAsQgHgJAAgUQAAgTAHgJQAJgLAOAAQAGAAADACIAIAEIAFAGIABAAIgBgpIAQAAIAABpIgMAAIgEgKIAAAAQgCAEgDACQgDADgFABQgEACgGAAQgNAAgJgKgAk2gDQgFAGAAAMQAAANAFAHQAFAGAHAAQALAAAEgGQAEgHAAgLIAAgCQAAgOgEgEQgDgIgMABQgIgBgEAIgAmVAzQgFgDgEgGQgDgHAAgJIAAgwIARAAIAAAuQAAAIADAEQAEAFAHAAQAIAAAEgDQAEgDACgGQACgGAAgIIAAglIAQAAIAABKIgNAAIgCgJIgBAAQgCADgEADIgIADIgKACQgJAAgGgDgAGjA0IAAguQAAgHgCgFQgEgEgHAAQgKgBgEAHQgEAFAAAMIAAAnIgQAAIAAguQAAgFgBgDQgBgEgEgDQgDgBgFAAQgGAAgEACQgEAEgBAEQgDAIAAAHIAAAlIgPAAIAAhKIAMAAIACAKIABAAQAEgFACgCIAIgDIAJgCQAIABAGADQAFACADAHIACAAQADgGAHgDQAGgDAHgBQANAAAGAHQAHAHAAANIAAAxgADNA0IAAguQAAgHgEgFQgDgEgIAAQgLgBgEAIQgEAFgBANIAAAlIgPAAIAAhKIAMAAIACAKIABAAQACgEAEgDIAIgDIAKgCQANAAAHAHQAHAHAAANIAAAxgAhGA0IAAguQAAgIgEgEQgDgEgIAAQgLgBgEAIQgEAFAAANIAAAlIgQAAIAAhKIAMAAIADAKIABAAQACgEADgDIAIgDIAKgCQAOAAAGAHQAIAHgBANIAAAxgAjwA0IAAhKIAQAAIAABKgAm9A0IgKgbIgmAAIgKAbIgRAAIAlhjIASAAIAlBjgAnbgbIgOAlIAeAAIgPgrgAjugkQgDgCAAgFQAAgFADgBQACgCAEAAQAEAAACACQAEABAAAFQAAAGgEABQgCACgEAAQgEAAgCgCg");
	this.shape_217.setTransform(255,201.35);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#EAEDEF").s().p("A3bC0QghAAgYgXQgXgYAAghIAAjHQAAghAXgYQAYgXAhAAMAu3AAAQAhAAAXAXQAYAYAAAhIAADHQAAAhgYAYQgXAXghAAg");
	this.shape_218.setTransform(351,202);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#16191C").s().p("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");
	this.shape_219.setTransform(89.8,34.025);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("EhQEArwQgyAAgjgjQgjgjAAgyMAAAhTvQAAgxAjgkQAjgjAyAAMCgJAAAQAyAAAjAjQAjAkAAAxMAAABTvQAAAygjAjQgjAjgyAAg");
	this.shape_220.setTransform(524.5,280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CreateAudience, new cjs.Rectangle(0,0,1049,560), null);


(lib.Checkmark = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AA1gkIhIBJIghgi");
	this.shape.setTransform(6.975,6.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F22F0").ss(2,0,0,4).p("AgxhFIBjAAQAJAAAFAGQAGAGAAAIIAABjQAAAJgGAGQgFAFgJAAIhjAAQgJAAgGgFQgFgGAAgJIAAhjQAAgJAFgFQAGgGAJAAg");
	this.shape_1.setTransform(7,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5F22F0").s().p("AgxBGQgJAAgGgFQgFgHAAgIIAAhjQAAgIAFgGQAGgGAJAAIBjAAQAIAAAGAGQAGAGAAAIIAABjQAAAIgGAHQgGAFgIAAg");
	this.shape_2.setTransform(7,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Checkmark, new cjs.Rectangle(-1,-1,16,16), null);


(lib.check_square02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("ABaAAIAABGQAAAIgGAHQgGAFgIAAIiLAAQgIAAgHgFQgFgHAAgIIAAiLQAAgIAFgGQAHgGAIAAIBtAA");
	this.shape.setTransform(9,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhAAUIAeAeIBjhj");
	this.shape_1.setTransform(12.5,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.check_square02, new cjs.Rectangle(-1,-1,21,20), null);


(lib.blinkingcursor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAABQIAAif");
	this.shape.setTransform(0,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},20).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,18);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// check_square_svg
	this.instance = new lib.check_square02();
	this.instance.setTransform(17.95,14.85,0.8421,0.8889,0,0,0,9.6,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAoQgKgGgDgMIARgFQAEAHAFAEQAGAEAFgBIAGgBQADAAADgDQACgCAAgEQAAgEgCgCQgCgCgEgCIgGgCIgJgDQgFgBgGgDQgFgCgEgGQgEgEAAgJQAAgJAEgFQAFgGAHgEQAHgDAIAAQAJAAAHADQAGADAFAFQAFAFACAGIgSAGQgCgFgEgDQgEgFgGAAQgFAAgEAEQgDACAAAEQAAAEADADQACADAEABIAHADIAHACIAIACIAIAEIAHAHQACAEAAAHQAAAIgEAHQgEAGgIAEQgIADgKAAQgOAAgKgHg");
	this.shape.setTransform(197.975,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAuIAAhYIASAAIAAAPIABAAQADgIAGgFQAHgFAJAAIAFABIAEABIAAAVIgFgBIgGgBQgHAAgFADQgEAEgDAFQgCAFgBAFIgBALIAAAlg");
	this.shape_1.setTransform(191.025,16.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVApQgJgFgHgLQgFgLAAgNQgBgOAGgKQAGgLAKgGQAJgGAMAAQAIAAAIADQAHACAHAGQAFAFAFAJQADAJAAAMIAAAFIhCAAQAAAIAEAGQAEAFAFADQAGADAGAAQAJAAAFgEQAHgFADgIIARAHQgCAIgHAHQgGAFgHAEQgJADgKAAQgMAAgLgGgAAYgHQgBgIgDgGQgDgEgGgCQgFgCgGgBQgIABgGAFQgHAHgBAKIAuAAIAAAAg");
	this.shape_2.setTransform(182.15,16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAxAuIAAgvQAAgHgBgGQgCgGgFgDQgDgEgHAAQgGAAgFADQgFADgCAGQgDAGAAAJIAAAuIgSAAIAAgvQgBgMgEgHQgEgHgJAAQgGAAgGADQgFADgCAGQgDAGAAAJIAAAuIgTAAIAAhYIASAAIAAAOIABAAQAFgIAIgFQAHgEAIAAQAGAAAFACQAFACAEAEQAEAEACAGQAIgKAHgEQAIgEAIAAQAHAAAIAEQAHAEAFAIQAEAIAAAMIAAA3g");
	this.shape_3.setTransform(169.3,16.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXApQgKgGgGgKQgFgLgBgOQABgNAFgLQAGgKAKgGQAKgGANAAQANAAAKAGQALAGAGAKQAFALABANQgBAOgFALQgGAKgLAGQgKAGgNAAQgNAAgKgGgAgMgZQgGAEgEAHQgCAHAAAHQAAAIACAIQAEAGAGAEQAFADAHAAQAIAAAGgDQAFgEADgGQADgIABgIQgBgHgDgHQgDgHgFgEQgGgDgIAAQgHAAgFADg");
	this.shape_4.setTransform(156.15,16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBA3QgFgDgDgFQgCgFgBgFIAAgJIAAgrIgJAAIgJAAIAAgRIASAAIAAgNIAAgMIASAAIAAAZIAZAAIAAARIgZAAIAAAkIAAAJQABAFACADQADADAGABIAGgBIAHgDIAAARIgIADIgJABQgKAAgFgEg");
	this.shape_5.setTransform(147.475,15.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAoQgKgGgDgMIARgFQAEAHAFAEQAGAEAFgBIAGgBQADAAADgDQACgCAAgEQAAgEgCgCQgCgCgEgCIgGgCIgJgDQgFgBgGgDQgFgCgEgGQgEgEAAgJQAAgJAEgFQAFgGAHgEQAHgDAIAAQAJAAAHADQAGADAFAFQAFAFACAGIgSAGQgCgFgEgDQgEgFgGAAQgFAAgEAEQgDACAAAEQAAAEADADQACADAEABIAHADIAHACIAIACIAIAEIAHAHQACAEAAAHQAAAIgEAHQgEAGgIAEQgIADgKAAQgOAAgKgHg");
	this.shape_6.setTransform(140.025,16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAqQgHgEgEgIQgEgIAAgMIAAg3IATAAIAAAwQAAANAFAGQAFAGAIAAQAGAAAFgEQAEgDADgGQACgFAAgHIAAgwIATAAIAAA8IABANIABAIIABAHIgTAAIgBgHIgBgFIAAAAQgEAHgHAEQgHAEgIAAQgKAAgHgEg");
	this.shape_7.setTransform(131.075,16.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVApQgKgFgGgLQgGgLAAgOQAAgOAGgKQAGgLAKgFQAKgGAMAAQAJAAAIADQAIADAGAGQAGAGAEAJIgSAHQgDgIgGgEQgGgEgIAAQgHAAgGAEQgFADgDAHQgDAHAAAHQAAAJADAHQADAGAGAEQAGADAHAAQAIAAAHgEQAGgGAEgIIARAHQgFAOgLAHQgLAIgQAAQgMAAgKgGg");
	this.shape_8.setTransform(121.225,16.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIBAIAAh/IASAAIAAB/g");
	this.shape_9.setTransform(110.1,14.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJBAIAAh/IASAAIAAB/g");
	this.shape_10.setTransform(105.8,14.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAnA/IgHgSIgIgSIgwAAIgHASIgHASIgVAAIAwh8IAXAAIAwB8gAARAIIgIgVIgJgYIAAAAIgRAtIAiAAIAAAAg");
	this.shape_11.setTransform(97.55,14.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgBA3QgFgDgDgFQgCgFgBgFIAAgJIAAgrIgJAAIgJAAIAAgRIASAAIAAgNIAAgMIASAAIAAAZIAZAAIAAARIgZAAIAAAkIAAAJQABAFACADQADADAGABIAGgBIAHgDIAAARIgIADIgJABQgKAAgFgEg");
	this.shape_12.setTransform(83.975,15.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVApQgKgFgGgLQgGgLAAgOQAAgOAGgKQAGgLAKgFQAKgGAMAAQAJAAAIADQAIADAGAGQAGAGAEAJIgSAHQgDgIgGgEQgGgEgIAAQgHAAgGAEQgFADgDAHQgDAHAAAHQAAAJADAHQADAGAGAEQAGADAHAAQAIAAAHgEQAGgGAEgIIARAHQgFAOgLAHQgLAIgQAAQgMAAgKgGg");
	this.shape_13.setTransform(75.975,16.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVApQgJgFgGgLQgHgLAAgNQABgOAFgKQAGgLAKgGQAKgGAMAAQAHAAAIADQAIACAFAGQAHAFADAJQAEAJAAAMIAAAFIhDAAQACAIADAGQADAFAHADQAFADAGAAQAIAAAHgEQAFgFAEgIIASAHQgEAIgFAHQgHAFgIAEQgIADgKAAQgMAAgLgGgAAYgHQgBgIgEgGQgCgEgGgCQgFgCgFgBQgJABgHAFQgFAHgDAKIAvAAIAAAAg");
	this.shape_14.setTransform(66,16.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIBAIAAh/IARAAIAAB/g");
	this.shape_15.setTransform(58.9,14.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUApQgLgFgFgLQgHgLAAgNQABgOAFgKQAGgLAKgGQAKgGALAAQAJAAAHADQAIACAFAGQAHAFADAJQAEAJAAAMIAAAFIhDAAQABAIAEAGQAEAFAGADQAFADAGAAQAIAAAHgEQAFgFAEgIIASAHQgEAIgFAHQgHAFgIAEQgIADgKAAQgMAAgKgGgAAYgHQgBgIgEgGQgDgEgFgCQgFgCgGgBQgJABgGAFQgFAHgDAKIAvAAIAAAAg");
	this.shape_16.setTransform(51.8,16.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSA9QgKgEgHgIQgHgJgEgMIATgGQADAJAEAGQAFAFAGADQAGACAFAAQAGgBAFgBQAFgCAEgEQADgEAAgGQAAgGgDgEQgEgEgFgCIgLgDIgKgDIgKgFIgLgFQgFgEgEgGQgDgGAAgJQAAgMAFgIQAGgHAKgFQAJgDALgBQALAAAJAEQAJAEAGAGQAFAHADAJIgTAHQgDgIgGgGQgGgEgJAAQgJgBgGAFQgFAEAAAHQAAAGAEAEQADAEAGACIAJAEIANAEIAKADIAKAFQAFAEADAGQAEAFAAAKQAAAKgGAKQgGAIgKAFQgKAFgNAAQgKAAgKgEg");
	this.shape_17.setTransform(41.575,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(9,-1.8,195.4,30.2), null);


(lib.Nofilterlist02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#16191C").s().p("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");
	this.shape.setTransform(67.95,701);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_1.setTransform(191.5,700.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#16191C").s().p("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");
	this.shape_2.setTransform(81.825,701);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_3.setTransform(191.5,700.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#16191C").s().p("ADTAvIAAgKIALAEIAMABQAJAAAFgDQAFgCAAgGQAAgFgEgDQgEgDgLgEQgLgEgEgCQgEgEgCgDQgCgDAAgFQAAgJAHgGQAHgEANAAQANAAALAEIgEAJQgMgEgIAAQgIAAgFACQgEADAAAEQAAAEACABIAFAEIANAFQANAEAFAGQAFAEAAAIQAAALgIAFQgIAGgOAAQgPAAgIgFgACnAdIAAgrIgLAAIAAgGIALgEIAEgRIAHAAIAAASIAWAAIAAAJIgWAAIAAArQAAAGADAEQADAEAGgBIAGAAIAEgBIAAAJIgFABIgHABQgVAAAAgXgAADAuQgGgFAAgLQAAgWAkgCIAMgBIAAgEQAAgIgEgEQgEgFgIABQgJAAgMAFIgDgIQAGgEAGgBIANgBQAOAAAGAFQAGAGAAANIAAAyIgIAAIgCgKIgBAAQgHAIgEABQgGADgIAAQgLAAgGgGgAAiAOQgNAAgHAFQgGAEAAAHQAAAGAEADQAEADAGAAQAKABAHgGQAGgGAAgKIAAgIgAinAuQgGgFAAgLQAAgWAkgCIANgBIAAgEQAAgIgEgEQgEgFgIABQgJAAgMAFIgEgIQAHgEAFgBIAOgBQANAAAGAFQAHAGAAANIAAAyIgIAAIgDgKIAAAAQgHAIgFABQgGADgHAAQgMAAgGgGgAiIAOQgNAAgGAFQgGAEAAAHQAAAGADADQAEADAHAAQAKABAGgGQAHgGAAgKIAAgIgACDAyIAAgwQAAgIgEgFQgEgEgJAAQgMAAgFAGQgGAHAAANIAAAnIgLAAIAAhJIAJAAIACAKIAAAAQADgFAHgEQAGgCAIAAQAOgBAHAHQAGAGAAAOIAAAwgAggAyIAAhJIALAAIAABJgAhaAyIAAhJIAKAAIABANIABAAQADgGAHgFQAFgEAIABIAIAAIgBAKIgIAAQgKAAgGAHQgGAHAAALIAAAngAjjAyIgkhjIAMAAIAXBAIAHAWIAGgWIAXhAIAMAAIgkBjgAgggmQgBgBAAgEQAAgEABgDIAFgBQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQACACAAAFQAAAEgCABQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgDAAgCgCg");
	this.shape_4.setTransform(38.375,1088.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_5.setTransform(191.5,1089.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#16191C").s().p("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");
	this.shape_6.setTransform(81.825,1090.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_7.setTransform(191.5,1089.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#16191C").s().p("AEDAvIAAgKQAFADAHABIAMACQAJAAAEgDQAFgDAAgGQAAgEgEgDQgDgDgLgFQgMgEgEgCQgEgDgCgEQgCgDgBgFQAAgJAIgFQAIgGAMAAQALAAANAFIgEAKQgLgFgJAAQgIAAgEACQgEADgBAEQAAAEACACIAFADIANAFQANAFAFAFQAFAFAAAHQAAALgIAFQgIAGgOAAQgPAAgIgFgADXAdIAAgrIgLAAIAAgGIALgFIAFgQIAGAAIAAASIAWAAIAAAJIgWAAIAAArQAAAGAEAEQADAEAFAAIAGgBIAEgBIAAAJIgFABIgGABQgWAAAAgXgAAwAuQgHgHAAgOIAAgwIALAAIAAAvQAAAKAFAEQAEAFAJAAQALAAAGgHQAFgHABgOIAAgmIALAAIAABKIgJAAIgCgKIAAAAQgFAFgFADQgHADgIAAQgMAAgIgGgAgeAvQgHgEgEgJQgFgJAAgMQAAgRAJgKQAJgLARAAQAPAAAJALQAJAKAAARQAAASgJALQgJAKgQAAQgKAAgIgFgAgdgIQgFAIAAANQAAAOAFAIQAHAIAKAAQAMAAAFgIQAFgHABgPQgBgNgFgHQgFgIgMAAQgLAAgGAHgAhnAqQgKgKABgSQgBgSAKgKQAJgLARAAIAKACQAFAAAEACIgEAKIgIgDIgIgBQgWAAgBAdQABAOAFAHQAGAHALAAQAIAAALgEIAAAKQgJAEgKAAQgRAAgIgKgAi0AvIAAgKQAGADAGABIAMACQAIAAAGgDQAEgDAAgGQAAgEgDgDQgEgDgMgFQgLgEgEgCQgEgEgCgDQgCgDAAgFQAAgJAHgFQAJgGAMAAQALAAAMAFIgDAKQgLgFgKAAQgIAAgEACQgEADAAAEQAAAEACACIAEADIAOAFQAMAFAGAFQAEAFAAAHQAAALgIAFQgHAGgPAAQgOAAgJgFgACzAzIAAgxQABgIgFgEQgDgFgKAAQgLAAgGAGQgFAGAAAOIAAAoIgMAAIAAhKIAJAAIACAKIABAAQAEgGAFgDQAHgDAIAAQAMAAAIAHQAHAGAAAOIAAAxgAjTAzIAAhKIAMAAIAABKgAk3AzIAAhjIAeAAQAXAAAOANQANANAAAWQAAAYgOAOQgNANgZAAgAksApIAPAAQAVAAAKgLQAKgJAAgVQAAgSgKgKQgKgKgTAAIgRAAgAjSgmQgBgCAAgEQAAgEABgBQABgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAFACQACADAAACQAAADgCADIgFACQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBg");
	this.shape_8.setTransform(44.55,929.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_9.setTransform(191.5,930.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#16191C").s().p("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");
	this.shape_10.setTransform(81.825,931.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_11.setTransform(191.5,930.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#16191C").s().p("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");
	this.shape_12.setTransform(71.6,543);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_13.setTransform(191.5,541.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#16191C").s().p("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");
	this.shape_14.setTransform(81.825,542.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_15.setTransform(191.5,541.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#16191C").s().p("ACMAvIAAgLIALAFIAMABQAJAAAFgDQAFgDAAgFQAAgFgEgDQgEgDgLgEQgJgEgGgDQgDgCgDgFQgCgCAAgFQAAgJAHgGQAIgFANAAQAMAAALAFIgEAJQgLgFgJAAQgIAAgEADQgFADAAAEQAAADACACQABABAEACQAEADAJACQAOAGAEAEQAFAGAAAHQAAAKgIAGQgHAFgPAAQgPAAgIgEgABHApQgJgJAAgTQAAgQAIgMQAJgKAPAAQAPAAAIAJQAIAJAAAOIAAAIIg0AAQABAOAGAGQAGAHAMAAQALAAANgGIAAALIgMADIgNABQgQAAgKgKgABQgKQgFAGgBAJIAnAAQAAgJgFgGQgFgGgJAAQgIAAgGAGgAARAdIAAgsIgLAAIAAgGIALgEIAFgQIAGAAIAAARIAWAAIAAAJIgWAAIAAArQAAAHAEADQADAEAFAAIAGAAIAFgBIAAAIIgGACIgGAAQgWAAAAgWgAg8AuQgGgGAAgLQAAgWAkgBIANgBIAAgEQAAgIgEgEQgEgFgIAAQgJAAgMAGIgEgJQAGgDAGgBQAGgCAIAAQANAAAGAGQAHAGAAANIAAAyIgJAAIgCgLIAAAAQgGAIgGACQgEACgJAAQgMAAgGgFgAgdAOQgOABgFADQgGAEAAAHQAAAHADADQAEADAHAAQAKAAAGgGQAGgGAAgKIAAgHgAhtAdIAAgsIgLAAIAAgGIALgEIAEgQIAHAAIAAARIAWAAIAAAJIgWAAIAAArQAAAHADADQADAEAGAAIAGAAIAEgBIAAAIIgFACIgHAAQgVAAAAgWgAjAAvIAAgLIAOAEQAHABAHAAQAMAAAGgEQAFgFAAgHQAAgGgCgDQgCgEgFgCIgPgGQgNgEgHgHQgFgHAAgLQAAgMAIgGQAJgHAOAAQAOAAAOAFIgEAKQgMgFgMAAQgKAAgFAEQgFAEAAAHQAAAFACAEQACACAFAEQAEADAKADQAPAFAGAGQAGAHAAAJQAAANgJAIQgKAHgQAAQgSAAgKgEg");
	this.shape_16.setTransform(31.975,807.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_17.setTransform(191.5,807.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#16191C").s().p("AEAAwIAAgLIAMAFIALABQAKAAAEgDQAFgEAAgEQAAgFgEgDQgEgDgLgFQgKgDgFgEQgEgCgCgEQgCgEgBgDQAAgKAIgFQAIgGANAAQANABAKAEIgEAKQgLgFgKAAQgIAAgEADQgDACAAAFQAAADABABIAFAEQAEACAJADQAOAFAEAFQAFAFgBAIQABAJgIAGQgIAGgOAAQgPAAgIgEgAC7AqQgJgKAAgSQgBgQAKgMQAIgLAPAAQAPAAAIAKQAIAKAAANIAAAHIg0AAQABANAGAHQAGAIAMgBQALAAANgFIAAALIgMADIgMABQgRAAgKgKgADEgJQgFAGgCAJIAoAAQAAgJgFgGQgEgGgKAAQgIAAgGAGgAApAeIAAgsIgLAAIAAgGIALgFIAEgPIAHAAIAAARIAVAAIAAAJIgVAAIAAArQAAAHADADQADAEAGAAIAGgBIAEAAIAAAIIgFACIgGAAQgXAAABgWgAh+AtQgGgFAAgPIAAgwIAMAAIAAAvQAAAJAEAFQAEAEAIAAQAMABAGgHQAFgGAAgPIAAgmIALAAIAABKIgJAAIgCgKIAAAAQgFAGgEACQgHADgIAAQgOAAgHgHgAjMAwQgHgFgFgJQgEgJAAgLQAAgSAJgKQAJgLAQAAQARAAAIALQAKALAAARQAAARgKALQgIAKgRAAQgKAAgIgEgAjLgIQgFAIAAAOQAAANAFAIQAHAHAKAAQAMAAAFgHQAGgIAAgNQAAgOgGgIQgFgHgMAAQgLAAgGAHgAkoAnQgMgOABgZQgBgPAGgLQAGgKAKgIQAMgFAOAAQAPgBANAGIgFAKQgLgFgMAAQgRAAgJALQgKALAAASQAAATAKALQAJALARAAQAJAAAPgEIAAALQgKADgPAAQgWAAgNgNgACSAzIAAhKIAMAAIAABKgABZAzIAAhKIAJAAIACAOIAAAAQAFgIAFgDQAHgEAHgBIAJACIgCAKIgIgBQgJAAgHAHQgGAHgBAKIAAApgAAFAzIAAgwQAAgJgEgEQgEgFgIAAQgMAAgFAGQgGAHAAAOIAAAnIgLAAIAAhKIAJAAIACAKIAAAAQADgFAHgDQAHgEAHAAQANAAAGAHQAIAHAAANIAAAxgACTglQgCgCAAgFQAAgEACgBQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQADAAACACQACACAAADQAAAEgCADQgCABgDAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAg");
	this.shape_18.setTransform(43.7,771.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_19.setTransform(191.5,771.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#16191C").s().p("ADkBBQgJgGAAgKQABgHAEgEQAFgGAIgBIgGgFQgCgCAAgEQAAgEACgDIAHgGQgEgCgFgFQgEgGABgHQgBgMAIgHQAIgHANAAIAKABIAbAAIAAAHIgPACIAEAHQABAEABAFQgBALgHAFQgIAHgNAAIgGgBQgIAEAAAGQABACACACQADABAGAAIANAAQAMAAAHAGQAGAFABAJQgBAMgJAIQgLAGgTAAQgOAAgIgFgADrAnQgEAEgBAGQAAAGAGADQAFAEAJgBQAPABAHgFQAGgEABgHQgBgHgEgCQgEgDgJAAIgOAAQgIAAgEAFgADxgbQgEAFAAAJQAAAHAEAEQAFADAIABQAQAAAAgPQAAgRgQgBQgIAAgFAEgAEtAhIAAgKQAFACAGACIANACQAIAAAFgEQAFgDAAgFQAAgFgEgCQgEgEgKgEQgMgDgEgDQgDgCgDgFQgCgCAAgGQAAgJAIgFQAHgGANAAQAKAAAOAFIgFAKQgKgGgKAAQgIABgEACQgEADgBAEQABAEABACIAFADIANAGQAMAEAGAFQAFAFAAAHQAAALgIAFQgHAGgOAAQgPAAgJgFgACXAgQgFgGAAgLQgBgVAlgBIAMAAIAAgFQAAgJgDgEQgEgEgJgBQgJAAgMAHIgDgJQAGgDAGgCIANgCQANABAHAFQAHAGgBAOIAAAyIgIAAIgCgLIgBAAQgFAHgGACQgGADgIAAQgKAAgIgGgAC3AAQgOABgFAEQgHADAAAIQABAGADADQADAEAIAAQAKgBAGgFQAGgGAAgLIAAgGgAhcAcQgKgKAAgSQAAgRAJgLQAJgLAPAAQAPAAAHAJQAJAJgBAQIAAAGIgzAAQAAANAGAHQAHAHALAAQALAAAOgFIAAAKIgMAEQgFABgIAAQgRAAgJgKgAhUgXQgEAFgBALIAnAAQAAgMgGgEQgEgHgJAAQgJAAgGAHgAizAcQgIgKAAgSQAAgTAIgKQAIgKAOAAQAQAAAIALIABAAIgBgFIAAgkIALAAIAABqIgJAAIgBgLIgBAAQgIAMgQAAQgOAAgIgKgAiqgWQgGAJAAANQAAANAGAIQAFAIAKAAQALAAAFgHQAGgGAAgOIAAgCQAAgQgGgGQgFgIgMAAQgKAAgEAIgAlVAYQgMgNAAgYQAAgYAMgNQAMgOAWAAQAVAAAMAOQAMANAAAYQAAAYgMANQgMAOgVAAQgWAAgMgOgAlMgrQgJALAAATQAAATAJALQAIALARAAQARAAAIgLQAIgLAAgTQAAgUgIgKQgIgLgRAAQgRAAgIALgABeAlIAAhZIgfAAIAAgLIBLAAIAAALIggAAIAABZgAgTAlIAAhLIAJAAIACAPIAAAAQAEgHAGgFQAFgEAHAAIAJABIgCAKIgIgBQgJAAgFAIQgHAHABALIAAAogAjwAlIAAhLIAJAAIABAPIAAAAQAFgIAFgEQAHgEAHAAIAJABIgCAKIgJgBQgIAAgHAIQgGAIgBAKIAAAog");
	this.shape_20.setTransform(48.25,614.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_21.setTransform(191.5,613.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#16191C").s().p("AB1AvIAAgKQAFADAGABIAMACQAIAAAGgDQAEgDAAgGQAAgFgDgDQgFgDgKgDIgPgHQgEgDgCgEQgDgDAAgFQAAgJAHgFQAIgGANAAQAMABAMAEIgEAKQgMgFgIAAQgJAAgEACQgEADAAAEQAAADACADIAEACIAOAGQANAFAFAFQAEAEAAAIQAAAKgHAHQgJAFgOAAQgPAAgHgFgAAwAqQgKgLAAgSQAAgRAJgKQAJgLAPAAQAOAAAIAKQAJAIAAAPIAAAHIg0AAQAAANAHAHQAGAHAMAAQAMAAAMgFIAAAKIgMAEIgNABQgRAAgJgKgAA5gJQgFAFgCAKIAoAAQgBgKgEgFQgEgGgKAAQgKAAgEAGgAgpAdIAAgsIgKAAIAAgFIAKgFIAFgQIAGAAIAAARIAXAAIAAAJIgXAAIAAAsQABAFADAFQADAEAGAAIAFgBIAFgBIAAAJIgGACIgGAAQgWAAAAgXgAidAmQgMgNABgYQgBgQAGgKQAGgNAKgFQAMgHAOAAQAQAAAMAGIgFAKQgMgGgLAAQgQAAgKAMQgKALAAASQAAATAKALQAJALARgBQALAAANgDIAAAKQgLAEgOAAQgXAAgMgOgAAHAyIAAhKIAMAAIAABKgAhNAyIAAhKIALAAIAABKgAAIgmQgCgCAAgDQAAgEACgDQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAAAQADAAADABQACADAAAEQAAADgCACQgDACgDAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAgAhMgmQgCgCAAgDQAAgEACgDIAFgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQACADAAAEQAAADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgCgCg");
	this.shape_22.setTransform(29.8,735.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_23.setTransform(191.5,736.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#16191C").s().p("ABqAuIAAgKIALAEIANACQAIAAAFgDQAFgCAAgHQAAgEgEgDQgEgDgKgFQgMgEgEgCQgEgDgCgEQgCgCAAgGQAAgJAIgFQAGgFANAAQANAAAMAFIgFAJQgMgFgIAAQgIAAgEADQgFACAAAEQABAEABACIAFADIANAFQANAFAFAFQAFAFAAAHQAAALgIAFQgHAGgOAAQgQAAgIgFgAATApQgKgJAAgSIAAg/IAMAAIAABAQAAANAHAGQAHAHANAAQAMAAAIgHQAGgGAAgNIAAhAIAMAAIAABAQAAARgKAJQgMAKgRAAQgSAAgKgKgAieAvIAAgMQAGADAHACIAPABQALAAAHgEQAFgFAAgIQAAgGgCgCQgDgEgEgCQgDgDgMgEQgOgEgGgHQgGgGABgLQAAgMAIgHQAJgGAOAAQAPAAAMAFIgDAKQgOgFgLAAQgIAAgGAEQgFAEAAAHQAAAGACACQACAEAEACIAPAHQAPAEAGAHQAGAGAAAKQAAANgJAIQgKAHgQAAQgSAAgKgEgAgQAyIglgxIgKAKIAAAnIgLAAIAAhjIALAAIAAAxIAtgxIAOAAIgoArIAqA4g");
	this.shape_24.setTransform(28.6,1124.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_25.setTransform(191.5,1125.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#16191C").s().p("AAMBGIAAhrIAJAAIABAKIABAAQAEgHAGgCQAGgDAHAAQAPAAAIAKQAIAKAAATQAAASgIAJQgIALgPAAQgGAAgHgDQgFgCgFgGIgBAAIABArgAAcgXQgFAHAAAOIAAACQAAAOAFAIQAGAGALAAQAKAAAFgHQAGgJAAgMQAAgOgGgHQgFgIgKAAQgLAAgGAGgAFcAhIAAgKQAFADAHABIAMABQAJAAAEgDQAFgDAAgFQAAgFgEgDQgEgDgKgEQgMgDgDgCQgEgDgDgFQgCgCAAgGQAAgJAIgGQAIgFAMAAQAKAAAOAFIgEAJQgLgEgKAAQgIgBgEADQgEADAAAEQAAADABADIAFADIAOAGQAMAEAGAFQAEAFAAAHQAAALgIAFQgHAGgOAAQgQAAgIgFgADCAhQgHgEgFgKQgEgJAAgKQAAgTAJgKQAJgKARAAQAPAAAKAKQAJALAAASQAAARgJAKQgJALgRAAQgKAAgIgFgADEgWQgGAIAAAOQAAAOAGAHQAFAIALgBQAMABAFgIQAGgHAAgOQAAgPgGgGQgFgIgMAAQgLAAgFAHgABiAPIAAgsIgLAAIAAgFIALgFIAFgQIAHAAIAAASIAVAAIAAAIIgVAAIAAAsQAAAGADAEQADADAGAAIAFAAIAFgBIAAAJIgGABIgGABQgWAAAAgXgAiOAcQgJgLAAgRQAAgSAJgLQAJgKARAAIALACQAFAAADACIgDAJIgIgCIgIgBQgXAAAAAdQAAAMAFAJQAGAHALAAQAJAAAKgEIAAAKQgIAEgLAAQgQAAgJgKgAjTAjQgGgCgEgGIgBAAIgDAJIgIAAIAAhpIAMAAIgBApIABAAQAHgLAQABQAPgBAIAKQAIAKAAATQAAASgIAJQgIALgPAAQgHAAgGgDgAjYgWQgFAGAAAQQAAAPAFAHQAFAGAMAAQALAAAEgHQAGgIAAgNQAAgOgGgIQgEgHgLAAQgMAAgFAHgAk5AgQgGgHAAgPIAAgvIALAAIAAAvQAAAKAEAEQAEAFAJgBQAMABAFgHQAGgGAAgPIAAgmIALAAIAABJIgJAAIgCgKIAAAAQgEAGgGADQgGADgIAAQgNAAgIgGgAmQAhIAAgLIANAEQAHABAIAAQALAAAGgDQAGgFAAgIQAAgGgCgCQgDgEgEgBQgEgDgLgEQgNgFgHgHQgGgHAAgKQAAgMAJgHQAJgHAOAAQAOAAANAGIgEAKQgLgGgNAAQgJAAgFAFQgFADAAAIQAAAFACADQABADAFADQAFADAJADQAQAGAGAGQAGAGAAAKQAAAMgKAJQgJAHgRAAQgSAAgJgFgAE+AkIAAgvQAAgJgEgFQgEgEgJAAQgMAAgFAGQgGAHAAAOIAAAmIgLAAIAAhJIAJAAIACAKIABAAQADgGAGgDQAGgDAIAAQANAAAIAHQAHAGAAAPIAAAvgACTAkIAAhJIALAAIAABJgAgXAkIAAhJIALAAIAABJgAhQAkIAAhJIAJAAIACAOIAAAAQADgHAHgFQAHgEAGAAIAJABIgBAKIgJgBQgIABgHAHQgHAHAAAMIAAAmgACUg0QgCgDAAgDQAAgEACgCIAFgBIAEABQACACAAAEQAAAEgCACIgEACIgFgCgAgWg0QgCgCAAgEQAAgEACgCQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIAFABQACADAAADQAAADgCADIgFACQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_26.setTransform(52.825,967.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_27.setTransform(191.5,966.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#16191C").s().p("AFZAsQgKgLAAgRQAAgSAJgKQAJgLAPAAQAPAAAIAJQAIALAAANIAAAHIg0AAQAAAMAHAIQAGAHAMAAQAMAAAMgFIAAAKIgMAEIgNABQgQAAgKgKgAFigHQgFAFgCAKIAoAAQAAgJgFgHQgFgFgJAAQgJAAgFAGgADSAxQgIgFgEgIQgEgIAAgNQAAgRAJgLQAJgKAQAAQAQAAAJALQAJAKAAARQAAASgJALQgJAKgQAAQgKAAgIgFgADTgGQgGAGAAAPQAAAOAGAIQAGAHALAAQAMAAAFgHQAGgIAAgOQAAgOgGgHQgFgHgMAAQgLAAgGAHgACVAfIAAgsIgLAAIAAgFIALgFIAFgQIAGAAIAAARIAWAAIAAAJIgWAAIAAArQAAAGAEAFQADADAFAAIAGAAIAFgBIAAAJIgGABIgGABQgWAAAAgXgABDAxIAAgLIANAEQAHACAHAAQAMAAAGgFQAGgEAAgIQAAgFgCgEIgHgGIgPgGQgOgFgGgGQgGgGAAgMQAAgLAJgHQAIgHAPAAQAQAAALAGIgEAKQgMgGgMAAQgJAAgFAEQgFAFAAAGQAAAGACADQABADAFADIAOAGQAQAFAGAGQAGAGAAALQAAANgKAHQgJAIgRAAQgRAAgKgFgAglAsQgKgKAAgSQAAgSAJgKQAJgLAPAAQAOAAAHAJQAJAKAAAOIAAAHIgzAAQAAANAHAHQAGAHAMAAQAMAAAKgFIAAAKIgLAEIgMABQgQAAgKgKgAgcgHQgGAGgBAJIAmAAQAAgKgDgGQgFgFgJAAQgJAAgFAGgAmCAoQgMgNAAgZQAAgXAMgOQAMgNAWAAQAWAAAMAOQAMANAAAXQAAAYgMAOQgMAOgWAAQgWAAgMgOgAl5gbQgJALAAASQAAAUAJALQAJALAQAAQARAAAIgLQAJgLAAgUQAAgSgJgLQgIgLgRAAQgQAAgJALgAEaA0IAAhKIAKAAIABAOIABAAQADgHAHgEQAFgEAIAAIAJABIgCAKIgIgBQgKAAgGAIQgGAGAAALIAAAogAhNA0IAAgwQAAgIgEgFQgFgEgJAAQgMAAgFAGQgFAHAAANIAAAnIgMAAIAAhKIAKAAIACALIAAAAQADgFAHgEQAHgDAHAAQAOAAAGAHQAHAHAAANIAAAwgAikA0IAAhKIALAAIAABKgAjHA0IAAhpIALAAIAABpgAjqA0IAAgwQAAgJgEgEQgFgEgIAAQgMAAgGAGQgFAHAAANIAAAnIgLAAIAAhKIAJAAIACALIAAAAQAFgGAFgDQAGgDAIAAQAOAAAGAHQAHAHAAANIAAAwgAijgkQgCgCAAgEQAAgEACgBQACgCADAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQACABAAAEQAAAEgCACQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgDAAgCgCg");
	this.shape_28.setTransform(52.725,577.125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_29.setTransform(191.5,577.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#424A55").s().p("AAEAnIAAgQIghAAIAAgMIAigxIAPAAIAAAwIAKAAIAAANIgKAAIAAAQgAgOAKIASAAIABgdIgBAAg");
	this.shape_30.setTransform(357.625,663.725);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E7E9EC").s().p("AgxA+QgaAAgSgSQgTgSABgaQgBgZATgSQASgSAagBIBjAAQAaABASASQATASAAAZQAAAagTASQgSASgaAAg");
	this.shape_31.setTransform(358,663.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("ADxAkIAAgQQAGAEAHABIAKACQAEAAAFgCQACgDAAgEIgBgEIgEgDIgKgGIgLgFIgGgHQgCgEAAgGQAAgLAIgFQAGgGANAAIALABIAMAEIgFANIgKgDIgJgBQgEAAgDACQgDACABADIAAAEIAEADIALAGQAKAFAEAFQAFAFAAAIQAAAKgIAGQgHAGgPAAQgLAAgKgEgABLAeQgLgLAAgTQAAgSALgLQAJgKASAAQASAAAKAKQAKALAAASQAAATgKALQgJAKgTAAQgSAAgJgKgABXgTQgFAIAAALQAAAMAFAIQAFAGAKAAQAUAAAAgaQAAgagUAAQgKAAgFAHgAiHAeQgJgKAAgUQAAgLAFgJQAEgKAIgEQAIgFALAAQAMAAAMAFIgGAOIgJgEIgJgBQgJAAgFAHQgFAGAAAMQAAAbATAAQAJAAAMgFIAAAOQgJAEgNAAQgRAAgJgKgAjeAeQgKgKAAgUQAAgTAKgKQAKgKASAAQARAAALAKQAJAKAAATQAAAUgJAKQgKAKgSAAQgSAAgKgKgAjRgTQgFAHAAAMQAAANAFAHQAFAGAKAAQATAAABgaQAAgagUAAQgKAAgFAHgADMAnIgig6IgBAAIABAVIAAAlIgOAAIAAhNIAVAAIAiA6IAAg6IAOAAIAABNgAASAnIAAg/IgUAAIAAgOIA6AAIAAAOIgVAAIAAA/gAgWAnIgGgSIgcAAIgHASIgSAAIAchOIAVAAIAcBOgAg1AHIAVAAIgLghgAkiAnIAAhNIARAAIAABAIAfAAIAAANg");
	this.shape_32.setTransform(42.1,663.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_33.setTransform(191.5,664.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#424A55").s().p("AgNAkQgGgDgEgJQgEgIAAgKQAAgWAKgMQAKgLATAAIAKAAIAAAOIgJgBQgIAAgFACQgFACgDAGQgDAFAAAJIAAAAQAGgJAKAAQALAAAGAHQAGAGAAALQAAAMgHAIQgIAHgMAAQgHAAgHgEgAgHAEQgDAEAAAEQAAAHADADQADAFAFAAQAFAAADgEQADgDAAgHQAAgFgDgEQgDgDgFAAQgEAAgEADg");
	this.shape_34.setTransform(357.625,1017.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E7E9EC").s().p("AgxA+QgaAAgSgSQgTgSABgaQgBgZATgSQASgTAaAAIBjAAQAaAAASATQATASAAAZQAAAagTASQgSASgaAAg");
	this.shape_35.setTransform(358,1017.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("ADsAkIAAgQIANAFIAKACQAFAAAEgCQADgCAAgFQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAAAgBgBIgDgDIgKgGQgIgDgDgCQgEgEgCgDQgCgEAAgGQAAgLAHgFQAHgGANAAIALABQAHACAFACIgFANIgLgDQgEgCgEAAQgEAAgDADQgDACAAAEIABADIAEADIAKAGQALAFAEAFQAEAEAAAIQAAALgIAGQgHAGgOAAQgMAAgKgEgABxAeQgKgKABgUQgBgLAFgJQAFgKAIgEQAIgFAMAAQAKAAAMAFIgFAOIgJgEIgIgCQgKAAgGAIQgEAHAAALQgBAbAVAAQAHAAAMgFIAAAOQgIAEgNAAQgSAAgIgKgAAgAhQgJgIABgOIAAgxIAQAAIAAAvQAAAJADAEQAEAEAIAAQAIAAAFgEQADgEAAgJIAAgvIAQAAIAAAyQAAAIgDAHQgFAHgHADQgGADgLAAQgPAAgIgHgAiKAeQgJgKAAgUQAAgTAJgKQAKgKASAAQASAAAJAKQAKAKAAATQAAAUgKAKQgJAKgSAAQgSAAgKgKgAh9gTQgFAHAAAMQAAANAFAHQAEAGALAAQATAAAAgaQABgagUAAQgKAAgFAHgAC+AnIAAg/IgVAAIAAgOIA8AAIAAAOIgWAAIAAA/gAg4AnIAAhNIAYAAQATAAALAKQAJAKAAASQABATgKAKQgMAKgVAAgAgoAaIAHAAQAYAAAAgaQAAgYgWAAIgJAAgAitAnIgSgeIgJAAIAAAeIgRAAIAAhNIAXAAQAQAAAIAGQAHAFAAAMQAAAHgDAGQgFAEgGADIAXAigAjIgDIAFAAQAJAAADgDQAEgCgBgGQABgGgEgCQgEgCgIAAIgFAAgAkeAnIAAhNIAZAAQAPAAAHAGQAIAGgBAMQAAANgHAGQgIAGgPAAIgHAAIAAAcgAkNgBIAGAAQAGAAAFgDQAEgDAAgGQgBgGgDgDQgCgCgIAAIgHAAg");
	this.shape_36.setTransform(41.65,1016.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_37.setTransform(191.5,1017.15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#424A55").s().p("AAEAnIAAgQIghAAIAAgLIAigyIAPAAIAAAwIAKAAIAAANIgKAAIAAAQgAgOAKIASAAIABgdIgBAAg");
	this.shape_38.setTransform(357.625,858.525);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E7E9EC").s().p("AgxA/QgaAAgSgTQgTgSABgaQgBgZATgSQASgSAaAAIBjAAQAaAAASASQATASAAAZQAAAagTASQgSATgaAAg");
	this.shape_39.setTransform(358,858.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#666666").s().p("AEUAkIAAgQIANAGIAKABQAFAAADgCQAEgCAAgEQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIgEgDIgKgGQgHgDgDgCIgHgHQgCgEABgGQgBgLAIgFQAHgGAMAAIALABIANAEIgGANIgKgDIgIgBQgEgBgEADQgDADABADIABADIADAEIAKAFQAMAFADAEQAEAFABAJQAAALgIAGQgHAFgPAAQgMABgJgFgAgmAeQgKgLAAgTQAAgSAKgLQAKgLARAAQASAAAJALQAKAKAAATQAAAUgKAKQgJAKgSAAQgRAAgKgKgAgagSQgEAGAAAMQAAAMAEAIQAGAGAJABQATgBAAgaQAAgagTABQgJgBgGAIgAitAkIAAgQIANAGIAKABQAFAAADgCQAEgCAAgEQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIgEgDIgKgGQgGgCgEgDIgHgHQgBgEgBgGQAAgKAIgGQAHgGAMAAIALABIANAEIgGANIgKgDIgIgBQgFgBgDADQgCACAAAEIABADIADAEIAKAFQAMAFADAEQAFAGAAAIQAAAKgIAHQgHAFgOAAQgMABgKgFgAj0AhQgJgJAAgNIAAgxIASAAIAAAvQAAAKADADQAEAFAIAAQAIAAAEgFQADgDAAgKIAAgvIARAAIAAAxQAAAKgDAGQgEAHgIADQgHAEgKgBQgQABgIgIgAk9AeQgJgLAAgSQABgMAEgJQAEgJAJgFQAIgFALAAQANAAALAFIgGAOIgJgEQgEgCgFABQgJgBgFAIQgFAGAAANQAAAaATAAQAKAAAKgFIAAAPQgKADgLAAQgQAAgLgKgAD8AnIgTgdIgJAAIAAAdIgRAAIAAhNIAYAAQAPAAAJAGQAHAFAAAMQAAAGgEAHQgEAEgGADIAWAigADggDIAGAAQAIAAADgDQAEgCAAgGQAAgGgEgCQgFgCgGAAIgGAAgACSAnIAAhNIAuAAIAAAOIgeAAIAAARIAbAAIAAAMIgbAAIAAAVIAeAAIAAANgABvAnIABg8IgBAAIgUA8IgPAAIgTg8IgBAAIABAYIAAAkIgOAAIAAhNIAWAAIATA7IAAAAIAUg7IAWAAIAABNgAheAnIAAg/IgWAAIAAgOIA8AAIAAAOIgVAAIAAA/g");
	this.shape_40.setTransform(45.25,858);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_41.setTransform(191.5,858.35);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#424A55").s().p("AAEAnIAAgQIghAAIAAgMIAigxIAPAAIAAAwIAKAAIAAANIgKAAIAAAQgAgOAKIASAAIABgdIgBAAg");
	this.shape_42.setTransform(357.625,469.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E7E9EC").s().p("AgxA/QgagBgSgSQgTgSABgaQgBgZATgSQASgSAaAAIBjAAQAaAAASASQATASAAAZQAAAagTASQgSASgaABg");
	this.shape_43.setTransform(358,469.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#666666").s().p("AChAkIAAgQIAOAFIAKACQAGgBADgCQADgCgBgEIgBgEIgEgDIgVgLIgGgHQgCgGAAgEQAAgLAHgFQAIgHAMAAIAMACIAMAEIgGANIgLgDIgIgBQgFAAgCACQgCABAAAFIABADQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAIALAGQAKAFAFAEQAEAGAAAIQAAAKgIAGQgIAGgNAAQgMAAgLgEgAjKAeQgKgLAAgTQAAgTAKgKQAKgLASAAQASAAAKALQAJALAAASQAAATgKALQgJAKgSAAQgSAAgKgKgAi+gTQgEAHgBAMQABAMAEAIQAGAGAKABQATAAABgbQgBgZgTAAQgLgBgFAHgACKAnIgTgeIgJAAIAAAeIgQAAIAAhOIAXAAQAQAAAIAHQAHAFAAAMQAAAIgEAEQgDAFgHADIAXAigABugEIAGAAQAHAAAEgCQAFgDAAgFQAAgGgFgCQgDgCgIAAIgGAAgAAgAnIAAhOIAuAAIAAAPIgdAAIAAARIAbAAIAAAMIgbAAIAAAUIAdAAIAAAOgAgwAnIAAhOIAYAAQAUAAAKALQAKAKAAASQAAATgLAKQgLAKgUAAgAgfAZIAGAAQAYAAABgZQgBgYgVAAIgJAAgAhMAnIgUgeIgIAAIAAAeIgRAAIAAhOIAXAAQAQAAAIAHQAHAFABAMQAAAHgFAFQgEAFgGADIAXAigAhogEIAFAAQAIAAAEgCQADgDABgFQgBgHgDgBQgEgCgIAAIgFAAg");
	this.shape_44.setTransform(33.9,469.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_45.setTransform(191.5,469.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#16191C").s().p("ADkAxIAAgKIALAEIAMABQAJAAAFgDQAEgCAAgGQAAgFgEgDQgDgDgLgEQgMgEgDgDQgEgDgDgDQgCgEAAgEQAAgJAIgGQAGgFAOAAQANAAAKAFIgEAJQgMgFgHAAQgJAAgEADQgEADAAAEQAAADABABIAGAEIAMAGQAOAEAEAGQAFAFABAHQgBAKgHAGQgIAGgPAAQgPAAgHgFgAC4AfIAAgsIgLAAIAAgFIALgFIAEgQIAGAAIAAARIAXAAIAAAJIgXAAIAAArQABAHADAEQADADAFAAIAGAAIAFgBIAAAJIgGABIgGABQgWAAABgXgAB5AsQgKgKABgTQgBgRAKgLQAJgKARAAIAKABIAJADIgDAKIgJgDIgIgBQgWAAgBAcQABAOAFAHQAGAIALAAQAIAAALgEIAAAKQgJAEgKAAQgRAAgIgKgAAjAvQgGgGAAgPIAAgwIAMAAIAAAwQgBAJAEAFQAFAEAJAAQALAAAGgGQAGgHgBgOIAAgnIAMAAIAABKIgJAAIgDgKIAAAAQgDAGgHADQgGADgIAAQgNAAgIgHgAgzAsQgIgKAAgTQAAgRAIgLQAJgKAOAAQAPAAAIALIABAAIAAgFIAAgkIAJAAIAABpIgIAAIgBgKIAAAAQgJAMgPAAQgOAAgJgKgAgqgGQgFAIgBANQABAPAFAHQAGAHAJAAQAMAAAFgGQAFgHABgOIAAgCQgBgPgFgHQgGgHgLAAQgJAAgGAIgAiAAxQgHgFgEgJQgFgIAAgMQAAgSAJgKQAKgKAPAAQAQAAAJAKQAKALAAARQAAATgKAJQgJALgQAAQgKAAgIgFgAh/gGQgFAHAAAOQAAAOAFAIQAHAHAKAAQAMAAAFgHQAGgHAAgPQAAgPgGgGQgFgHgMAAQgKAAgHAHgAjFA0IAAhKIAKAAIABAOIABAAQACgGAIgFQAFgEAHAAIAJABIgCAKIgIgBQgJAAgGAIQgGAGAAALIAAAogAkYA0IAAhjIAaAAQAmAAAAAdQAAAQgLAHQgKAIgTAAIgMAAIAAAngAkMADIALAAQAPAAAHgEQAHgFAAgLQAAgKgHgFQgHgFgNAAIgNAAg");
	this.shape_46.setTransform(41.4,1052.475);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_47.setTransform(191.5,1053.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#16191C").s().p("AFiA+QgIgFAAgLQAAgGAFgFQAEgEAIgDQgEgCgBgCQgCgDAAgEQAAgEACgDIAHgFQgFgDgEgEQgEgGAAgIQAAgLAIgIQAIgGANgBIAKACIAaAAIAAAHIgOACIAEAGQABAEAAAFQAAALgHAFQgHAHgOAAIgGAAQgIAEAAAFQAAADADABQADACAGAAIANAAQAMAAAGAFQAHAFAAAKQAAAMgKAHQgKAHgTAAQgPAAgIgGgAFqAkQgFAEAAAGQAAAHAFADQAGADAJAAQAPAAAGgFQAHgDAAgIQAAgGgEgCQgEgDgKAAIgNAAQgIAAgEAEgAFwgdQgFAFAAAIQAAAIAFAEQAFAEAHAAQARAAAAgQQAAgRgRAAQgHAAgFAEgAGsAeIAAgKQAFADAGACIAMABQAJAAAFgDQAFgDAAgFQAAgFgEgDQgEgEgLgDQgLgDgEgDQgEgCgCgFQgCgCAAgGQAAgJAHgGQAIgGANAAQAKABANAFIgEAJQgKgFgKAAQgIAAgEADQgFACAAAEQAAAEACACIAFAEIANAFQAMAEAGAFQAFAFAAAIQAAAKgIAFQgIAHgOgBQgPABgIgGgAEWAdQgGgFAAgLQAAgWAkAAIANgBIAAgFQAAgIgEgEQgDgFgJAAQgJAAgMAGIgDgJQAFgDAHgBIANgCQANAAAHAGQAGAFAAAOIAAAyIgIAAIgCgKIgBAAQgGAGgFADQgGACgIAAQgLABgHgHgAE2gBQgOAAgGADQgGAEAAAIQAAAFAEAEQADADAHAAQALAAAGgGQAGgFAAgLIAAgGgAAiAZQgKgKAAgRQAAgSAJgKQAJgMAPAAQAOAAAIAKQAIAIAAAQIAAAIIgzAAQAAALAGAHQAHAIALAAQALAAANgGIAAAKIgLAEQgFABgIAAQgRAAgJgKgAAqgaQgFAFgBAMIAnAAQAAgMgFgFQgEgGgJAAQgJAAgGAGgAiuAeQgHgEgFgJQgEgIAAgLQAAgTAJgKQAJgLARAAQAPAAAKALQAJAKAAATQAAARgJAKQgKAKgQAAQgLABgHgGgAitgZQgFAJAAAOQAAANAGAHQAFAIALAAQALAAAGgIQAGgHAAgNQAAgPgGgHQgGgIgLAAQgLABgGAGgAjqAMIAAgrIgLAAIAAgFIALgGIAEgPIAHAAIAAARIAWAAIAAAJIgWAAIAAArQAAAHADAEQAEADAFAAIAGAAIAEgBIAAAJIgFABIgHAAQgVAAAAgXgAkzAeIAAgKQAFADAHACIAMABQAJAAAEgDQAFgDAAgFQAAgFgEgDQgDgDgLgEQgMgDgDgDQgEgCgDgFQgCgCAAgGQAAgJAIgGQAHgGANAAQAKABAOAFIgEAJQgLgFgKAAQgHAAgFADQgEACAAAEQAAAEABACIAFAEIANAFQANAFAFAEQAFAFAAAIQAAAKgIAFQgHAHgOgBQgQABgIgGgAl+AdQgHgHAAgOIAAgwIAMAAIAAAwQAAAKAEADQAEAFAJAAQALAAAGgHQAFgFAAgOIAAgoIAMAAIAABKIgKAAIgBgKIgBAAQgEAGgGADQgGACgIAAQgNAAgHgGgAnUAWQgMgNAAgYQAAgQAGgLQAGgMAKgGQALgHAPABQAQAAAMAFIgFAKQgLgFgMAAQgRAAgJALQgKAMAAASQAAARAKANQAJAKARAAQAMAAAMgEIAAALQgLADgPAAQgWAAgMgNgADdAiIAAhYIggAAIAAgLIBLAAIAAALIgfAAIAABYgABrAiIAAhKIAJAAIABAOIABAAQADgGAHgFQAGgFAHAAIAJABIgCALIgIgBQgJAAgGAHQgHAIAAALIAAAngAgGAiIAAgwQAAgJgEgEQgDgFgIAAQgLABgFAFQgFAHAAAMIAAApIgLAAIAAgwQAAgIgEgFQgEgFgIAAQgLABgFAFQgFAHAAAOIAAAnIgLAAIAAhKIAJAAIACALIAAAAQADgFAGgEQAGgEAIAAQARAAAGAOIAAAAQADgFAHgFQAIgEAGAAQANAAAGAHQAGAGAAAPIAAAwg");
	this.shape_48.setTransform(60.925,895.55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_49.setTransform(191.5,894.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#16191C").s().p("AG+AxIAAgKIAMAEIALABQAIAAAGgCQAFgDAAgGQAAgEgEgEQgEgDgLgEQgJgDgGgEIgGgGQgCgEAAgEQAAgJAHgGQAHgFAOAAQANAAAKAFIgEAJQgLgEgJAAQgJAAgDACQgEACAAAFQAAADABABIAFAEIANAGQAOAFAEAFQAFAEAAAIQAAAKgIAGQgIAGgOAAQgOAAgJgFgAF5AsQgJgKAAgSQAAgSAJgKQAJgLAPAAQAOAAAIAJQAIAKAAAOIAAAHIgzAAQAAANAGAHQAGAHAMAAQANAAALgFIAAAKIgLAEIgNABQgRAAgKgKgAGCgHQgGAGAAAJIAnAAQAAgKgFgGQgFgFgIAAQgJAAgGAGgAEiAsQgIgKAAgTQAAgRAIgLQAJgKAOAAQAPAAAIALIABAAIgBgKIAAgfIAMAAIAABpIgJAAIgCgKIgBAAQgHAMgQAAQgOAAgJgKgAErgGQgFAHAAAOQAAAPAFAHQAFAHAKAAQAMAAAFgGQAFgGAAgOIAAgDQAAgPgFgHQgFgGgMAAQgKAAgFAHgADWAxQgIgFgEgIQgFgJAAgMQAAgRAJgLQAKgKAQAAQAQAAAJALQAJAKAAARQAAATgJAKQgJAKgRAAQgKAAgHgFgADXgGQgGAGAAAPQAAAPAGAHQAGAHALAAQALAAAGgHQAFgIAAgOQAAgOgFgHQgGgHgLAAQgMAAgFAHgAB6AoQgMgNAAgZQAAgOAFgMQAGgLALgHQALgGAPAAQAQAAALAGIgFAKQgMgGgKAAQgRAAgJALQgKALAAASQAAAUAJALQAJAKARAAQAMAAAMgDIAAAKQgLAEgOAAQgWAAgMgOgAAcAfIAAgsIgLAAIAAgFIALgFIAFgQIAGAAIAAASIAWAAIAAAIIgWAAIAAArQAAAGAEAFQADADAFAAIAGAAIAFgBIAAAJIgGABIgGABQgWAAAAgXgAiKAvQgHgHAAgNIAAgwIAMAAIAAAvQAAAJAEAFQAEAEAJAAQAMAAAFgGQAGgHAAgOIAAgmIALAAIAABJIgJAAIgCgKIAAAAQgDAFgHAEQgGADgIAAQgOAAgHgHgAjYAxQgIgFgEgIQgFgJAAgMQAAgRAKgLQAJgKAQAAQAQAAAJALQAJAKAAARQAAASgJALQgKAKgPAAQgLAAgHgFgAjXgGQgGAGAAAPQAAAOAGAIQAGAHALAAQALAAAGgHQAGgIAAgOQAAgOgGgHQgGgHgLAAQgLAAgGAHgAkiAsQgJgKAAgTQAAgRAJgLQAJgKARAAIAKABQAHACACABIgEAKIgIgDIgIgBQgWAAAAAcQAAAPAFAGQAGAIALAAQAKAAAJgEIAAAKQgIAEgLAAQgQAAgJgKgAlvAxIAAgKIAMAEIAMABQAIAAAGgCQAEgDAAgGQAAgEgDgEQgFgDgKgEQgKgDgFgEIgHgGQgCgEAAgEQAAgJAIgGQAHgFANAAQANAAALAFIgEAJQgLgEgKAAQgJAAgDACQgEACAAAFQAAADACABIAFAEIANAGQAOAFAEAFQAEAEAAAIQAAAKgHAGQgJAGgNAAQgPAAgJgFgAgGA0IAAgwQAAgIgFgFQgDgEgKAAQgMAAgFAGQgFAGAAAOIAAAnIgMAAIAAhJIAJAAIACAKIABAAQAEgGAGgDQAGgDAIAAQANAAAHAHQAGAGAAAOIAAAwgAmNA0IAAhJIALAAIAABJgAnyA0IAAhjIAfAAQAWAAAOANQANAOAAAVQAAAagNAMQgNANgaAAgAnmAqIAOAAQAUAAALgKQALgKAAgUQAAgSgKgLQgKgJgTAAIgRAAgAmMgkQgCgCAAgEQAAgEACgBQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_50.setTransform(63.225,505.125);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("A96C0IAAlnMA71AAAIAAFng");
	this.shape_51.setTransform(191.5,505.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#424A55").s().p("AAKAeQgHgLAAgTQAAgUAHgKQAGgJAOAAQAOAAAHAKQAHALAAASQAAAUgHAKQgHAKgOAAQgNAAgHgKgAAWgUQgDAHAAANQAAAOADAHQACAGAGAAQAGAAADgGQACgIAAgNQAAgNgCgHQgDgGgGAAQgFAAgDAGgAgiAnIAAg8IgFAGIgJAHIgJgKIAagUIANAAIAABNg");
	this.shape_52.setTransform(357.875,60.675);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E7E9EC").s().p("AgxA/QgaAAgSgTQgTgSABgaQgBgZATgSQASgSAaAAIBjAAQAaAAASASQATASAAAZQAAAagTASQgSATgaAAg");
	this.shape_53.setTransform(358,60.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#666666").s().p("ADTAkIAAgQIAOAFIAKACQAEAAAFgCQADgCAAgFQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBAAAAgBIgEgDIgKgGQgHgDgEgCIgGgHQgCgEAAgGQAAgKAIgGQAGgGANAAIALABIANAEIgGANQgFgCgFgBQgEgCgFAAQgDAAgEADQgDACABADIABAEIADADIALAGQALAFADAFQAFAEAAAIQAAALgIAGQgHAGgOAAQgMAAgLgEgAByAkIAAgQIAOAFIAKACQAEAAAFgCQACgCAAgFQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBAAAAgBIgDgDIgLgGQgHgDgEgCIgFgHQgDgEAAgGQABgKAGgGQAIgGAMAAQAGAAAGABIAMAEIgGANQgFgCgGgBQgDgCgFAAQgEAAgDADQgCACgBADIABAEIAEADIALAGQALAFADAFQAFAEAAAIQgBALgHAGQgIAGgNAAQgNAAgKgEgAC0AnIAAhNIAQAAIAABNgABDAnIAAgeIgagvIASAAIAQAgIARggIASAAIgaAvIAAAegAgLAnIAAhNIAQAAIAABAIAgAAIAAANgAgnAnIgFgSIgdAAIgFASIgSAAIAchOIAUAAIAbBOgAhEAHIAUAAIgKghgAiAAnIgig6IAAAAIABA6IgPAAIAAhNIAVAAIAiA6IABAAIgBg6IAPAAIAABNgAjMAnIgGgSIgcAAIgGASIgSAAIAchOIAVAAIAbBOgAjqAHIAVAAIgLghg");
	this.shape_54.setTransform(38.25,60.675);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#16191C").s().p("ACeAsQgLgKAAgTQAAgTAKgKQAJgKARAAQARAAAIAJQAJAJAAAQIAAAKIgxAAQABAJAFAFQAEAFAJAAQAHAAAHgCIAMgEIAAAQIgLAEQgHABgJAAQgSAAgKgKgACtgFQgDAEgBAHIAdAAQAAgGgEgFQgEgEgGAAQgHAAgEAEgABjAwQgGgGAAgNIAAgkIgKAAIAAgJIAMgHIAFgQIAOAAIAAAQIAVAAIAAAQIgVAAIAAAkQAAAEACACQADADAEAAQAFAAAIgDIAAAQQgIADgLAAQgNAAgFgGgAieAxQgIgEgFgKQgFgJABgMQAAgSAJgKQAKgKASAAQALAAAIAFQAJAEAEAJQAEAIABAMQAAATgKALQgKAKgRAAQgMAAgIgFgAiXgCQgDAGAAAKQAAALADAHQAFAFAIAAQAHAAAEgFQAEgGAAgMQAAgLgEgFQgEgFgHAAQgIAAgFAFgADqA1IAAhMIAQAAIADANIACAAQADgGAGgEQAHgEAGAAIAHABIgBATIgHgBQgKAAgFAFQgGAEABAKIAAAngAAwA1IAAhqIAVAAIAABqgAAGA1IAAhMIAUAAIAABMgAgtA1IAAg8IgLAAIAAgKIALgGIAAgFQABgNAGgGQAGgGAOAAQAMAAAGADIgDAPQgHgCgGAAQgEAAgBADQgCACAAAFIAAAEIASAAIAAAQIgSAAIAAA8gAjdA1IgshLIAAAAIABBLIgTAAIAAhjIAbAAIArBKIABAAIgChKIAUAAIAABjgAAFgqQAAgLALAAQALAAAAALQAAAEgDADQgDADgFAAQgLAAAAgKg");
	this.shape_55.setTransform(41.65,23.275);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E6E6E6").s().p("A96CWIAAkrMA71AAAIAAErg");
	this.shape_56.setTransform(191.5,23.55);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("A96F/IAAqtQAAghAXgXQAXgYAiAAMA5VAAAQAhAAAXAYQAYAXAAAhIAAKtg");
	this.shape_57.setTransform(191.5,38.275);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(191.5,256.7,1,1,0,0,0,191.5,180.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("Egd6BaoMAAAi1PMA71AAAMAAAC1Pg");
	this.shape_58.setTransform(191.5,580);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.instance},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Nofilterlist02, new cjs.Rectangle(-0.5,0,384,1160), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Egd6AiJMAAAhERMA71AAAMAAABERg");
	mask_1.setTransform(191.5,218.5);

	// Layer_3
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#424A55").s().p("AAKAeQgHgLAAgTQAAgUAHgKQAGgJAOAAQAOAAAHAKQAHALAAASQAAAUgHAKQgHAKgOAAQgNAAgHgKgAAWgUQgDAHAAANQAAAOADAHQACAGAGAAQAGAAADgGQACgIAAgNQAAgNgCgHQgDgGgGAAQgFAAgDAGgAgiAnIAAg8IgFAGIgJAHIgJgKIAagUIANAAIAABNg");
	this.shape_24.setTransform(357.875,60.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E7E9EC").s().p("AgxA/QgaAAgSgTQgTgSABgaQgBgZATgSQASgSAaAAIBjAAQAaAAASASQATASAAAZQAAAagTASQgSATgaAAg");
	this.shape_25.setTransform(358,60.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("ADTAkIAAgQIAOAFIAKACQAEAAAFgCQADgCAAgFQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBAAAAgBIgEgDIgKgGQgHgDgEgCIgGgHQgCgEAAgGQAAgKAIgGQAGgGANAAIALABIANAEIgGANQgFgCgFgBQgEgCgFAAQgDAAgEADQgDACABADIABAEIADADIALAGQALAFADAFQAFAEAAAIQAAALgIAGQgHAGgOAAQgMAAgLgEgAByAkIAAgQIAOAFIAKACQAEAAAFgCQACgCAAgFQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBAAAAgBIgDgDIgLgGQgHgDgEgCIgFgHQgDgEAAgGQABgKAGgGQAIgGAMAAQAGAAAGABIAMAEIgGANQgFgCgGgBQgDgCgFAAQgEAAgDADQgCACgBADIABAEIAEADIALAGQALAFADAFQAFAEAAAIQgBALgHAGQgIAGgNAAQgNAAgKgEgAC0AnIAAhNIAQAAIAABNgABDAnIAAgeIgagvIASAAIAQAgIARggIASAAIgaAvIAAAegAgLAnIAAhNIAQAAIAABAIAgAAIAAANgAgnAnIgFgSIgdAAIgFASIgSAAIAchOIAUAAIAbBOgAhEAHIAUAAIgKghgAiAAnIgig6IAAAAIABA6IgPAAIAAhNIAVAAIAiA6IABAAIgBg6IAPAAIAABNgAjMAnIgGgSIgcAAIgGASIgSAAIAchOIAVAAIAbBOgAjqAHIAVAAIgLghg");
	this.shape_26.setTransform(38.25,60.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#16191C").s().p("ACeAsQgLgKAAgTQAAgTAKgKQAJgKARAAQARAAAIAJQAJAJAAAQIAAAKIgxAAQABAJAFAFQAEAFAJAAQAHAAAHgCIAMgEIAAAQIgLAEQgHABgJAAQgSAAgKgKgACtgFQgDAEgBAHIAdAAQAAgGgEgFQgEgEgGAAQgHAAgEAEgABjAwQgGgGAAgNIAAgkIgKAAIAAgJIAMgHIAFgQIAOAAIAAAQIAVAAIAAAQIgVAAIAAAkQAAAEACACQADADAEAAQAFAAAIgDIAAAQQgIADgLAAQgNAAgFgGgAieAxQgIgEgFgKQgFgJABgMQAAgSAJgKQAKgKASAAQALAAAIAFQAJAEAEAJQAEAIABAMQAAATgKALQgKAKgRAAQgMAAgIgFgAiXgCQgDAGAAAKQAAALADAHQAFAFAIAAQAHAAAEgFQAEgGAAgMQAAgLgEgFQgEgFgHAAQgIAAgFAFgADqA1IAAhMIAQAAIADANIACAAQADgGAGgEQAHgEAGAAIAHABIgBATIgHgBQgKAAgFAFQgGAEABAKIAAAngAAwA1IAAhqIAVAAIAABqgAAGA1IAAhMIAUAAIAABMgAgtA1IAAg8IgLAAIAAgKIALgGIAAgFQABgNAGgGQAGgGAOAAQAMAAAGADIgDAPQgHgCgGAAQgEAAgBADQgCACAAAFIAAAEIASAAIAAAQIgSAAIAAA8gAjdA1IgshLIAAAAIABBLIgTAAIAAhjIAbAAIArBKIABAAIgChKIAUAAIAABjgAAFgqQAAgLALAAQALAAAAALQAAAEgDADQgDADgFAAQgLAAAAgKg");
	this.shape_27.setTransform(41.65,23.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E6E6E6").s().p("A96CWIAAkrMA71AAAIAAErg");
	this.shape_28.setTransform(191.5,23.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("A96F/IAAqtQAAghAXgXQAXgYAiAAMA5VAAAQAhAAAXAYQAYAXAAAhIAAKtg");
	this.shape_29.setTransform(191.5,38.275);

	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(191.5,256.7,1,1,0,0,0,191.5,180.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Egd6AiJMAAAhERMA71AAAMAAABERg");
	this.shape_30.setTransform(191.5,218.5);

	var maskedShapeInstanceList = [this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.instance,this.shape_30];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.instance},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,383,437), null);


(lib.firstdropdownmenu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(170,194.2,0.8877,0.8876,0,0,0,191.5,218.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.firstdropdownmenu, new cjs.Rectangle(-0.4,0,340.9,387.9), null);


// stage content:
(lib.Peel_anim_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// filter_2_scroll_bar
	this.instance = new lib.menuscrollbar();
	this.instance.setTransform(693.95,135.35,1,1,0,0,0,2,20);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(219).to({_off:false},0).to({y:167.35},48).to({_off:true},1).wait(239).to({_off:false,x:698.05,y:303.05},0).to({y:353.05},151).to({_off:true},58).wait(96));

	// Layer_27
	this.instance_1 = new lib.textFilterbyMetrics();
	this.instance_1.setTransform(65.65,106.75,1,1,0,0,0,55.6,10.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(168).to({_off:false},0).to({x:135.65,alpha:1},16,cjs.Ease.quadOut).to({x:145.65},80,cjs.Ease.quadOut).to({x:65.65,alpha:0},10,cjs.Ease.quadOut).to({_off:true},1).wait(537));

	// text_Product
	this.instance_2 = new lib.textSegmentbyProduct();
	this.instance_2.setTransform(-14,264.4,1,1,0,0,0,69.5,12.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(587).to({_off:false},0).wait(1).to({regX:85,regY:18.3,x:10.65,y:270,alpha:0.062},0).wait(1).to({x:19.8,alpha:0.1243},0).wait(1).to({x:29,y:270.05,alpha:0.187},0).wait(1).to({x:38.25,alpha:0.2499},0).wait(1).to({x:47.5,alpha:0.3129},0).wait(1).to({x:56.8,y:270.1,alpha:0.3761},0).wait(1).to({x:66.1,alpha:0.4394},0).wait(1).to({x:75.4,y:270.15,alpha:0.5026},0).wait(1).to({x:84.65,alpha:0.5657},0).wait(1).to({x:93.85,alpha:0.6287},0).wait(1).to({x:103.1,y:270.2,alpha:0.6915},0).wait(1).to({x:112.3,alpha:0.754},0).wait(1).to({x:121.4,alpha:0.8162},0).wait(1).to({x:130.5,y:270.25,alpha:0.8779},0).wait(1).to({x:139.5,alpha:0.9392},0).wait(1).to({regX:69.5,regY:12.7,x:132.95,y:264.7,alpha:1},0).to({x:139.95},121,cjs.Ease.quadOut).to({x:-14,y:264.4,alpha:0},10,cjs.Ease.quadOut).to({_off:true},1).wait(77));

	// shape
	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(-10.45,106.75,0.0132,0.6975,0,0,0,193.7,43.1);
	this.instance_3._off = true;
	var instance_3Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_1];
	this.instance_3.cache(-3,-3,386,92);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(168).to({_off:false},0).to({regX:190.2,scaleX:0.6841,x:153.35},16,cjs.Ease.quadOut).to({regY:43.2,x:163.9},80,cjs.Ease.quadOut).to({regX:193.7,regY:43.1,scaleX:0.0132,x:-0.45},10,cjs.Ease.quadOut).to({_off:true},1).wait(312).to({_off:false,x:-10.45,y:266.75},0).to({regX:190.2,scaleX:0.6841,x:153.35},16,cjs.Ease.quadOut).wait(121).to({regX:193.7,scaleX:0.0132,x:-0.45},10,cjs.Ease.quadOut).to({_off:true},1).wait(77));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_1).wait(168).to(new cjs.ColorFilter(0,0,0,1,95,34,240,0), 0).wait(418).to(new cjs.ColorFilter(0,0,0,1,95,34,240,0), 0).wait(224));

	// text
	this.instance_4 = new lib.Symbol2();
	this.instance_4.setTransform(148.5,248.25,1.08,1.08,0,0,0,110.5,14.7);
	this.instance_4._off = true;
	var instance_4Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_4.filters = [instance_4Filter_2];
	this.instance_4.cache(7,-4,199,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).to({x:205.4},16,cjs.Ease.quadOut).to({x:215.4},84,cjs.Ease.quadOut).to({x:148.5,alpha:-1},10,cjs.Ease.quadOut).to({_off:true},1).wait(677));
	this.timeline.addTween(cjs.Tween.get(instance_4Filter_2).wait(24).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 16,cjs.Ease.quadOut).wait(84).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 10,cjs.Ease.quadOut).wait(677));

	// shape
	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(19.55,246.75,0.0132,0.6975,0,0,0,193.7,43.1);
	this.instance_5._off = true;
	var instance_5Filter_3 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_5.filters = [instance_5Filter_3];
	this.instance_5.cache(-3,-3,386,92);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).to({regX:190.2,scaleX:0.7894,x:203.45},16,cjs.Ease.quadOut).to({regY:43.2,x:214},84,cjs.Ease.quadOut).to({regX:193.7,regY:43.1,scaleX:0.0132,x:-0.45},10,cjs.Ease.quadOut).to({_off:true},1).wait(677));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_3).wait(24).to(new cjs.ColorFilter(0,0,0,1,95,34,240,0), 0).wait(787));

	// mouse_hand
	this.instance_6 = new lib.Tween1("synched",0);
	this.instance_6.setTransform(328.95,430);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween2("synched",0);
	this.instance_7.setTransform(161.25,313.35);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(31).to({_off:false},0).to({_off:true,x:161.25,y:313.35},23,cjs.Ease.quadOut).wait(758));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(31).to({_off:false},23,cjs.Ease.quadOut).wait(5).to({startPosition:0},0).to({x:91.25,y:343.35},69,cjs.Ease.quadOut).to({x:548.25,y:117.35},31,cjs.Ease.quadOut).wait(49).to({startPosition:0},0).to({y:337.35},48,cjs.Ease.quadOut).wait(4).to({startPosition:0},0).to({y:249.35},12).wait(49).to({startPosition:0},0).to({y:191.35},19).wait(28).to({startPosition:0},0).to({x:668.25},21,cjs.Ease.quadOut).wait(35).to({startPosition:0},0).to({x:558.25,y:331.35},28,cjs.Ease.quadOut).to({y:271.35},23,cjs.Ease.quadOut).to({y:381.35},31,cjs.Ease.quadOut).wait(21).to({startPosition:0},0).to({x:518.25,y:351.35},29,cjs.Ease.quadOut).wait(72).to({startPosition:0},0).to({x:558.25,y:381.35},30).wait(59).to({startPosition:0},0).to({x:468.25},28).wait(67));

	// dropdown_highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6515DD").ss(2,1,2).p("AreihIW9AAIAAFCI29AAg");
	this.shape.setTransform(428.1,362.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(735).to({_off:false},0).wait(77));

	// Products_svg
	this.instance_8 = new lib.Products();
	this.instance_8.setTransform(498.95,310.45,0.9033,0.9029,0,0,0,223.8,75.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(717).to({_off:false},0).wait(95));

	// white_cover
	this.instance_9 = new lib.Symbol1();
	this.instance_9.setTransform(316.7,99.55,0.1316,0.2442,0,0,0,190.4,43);
	this.instance_9._off = true;
	var instance_9Filter_4 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_9.filters = [instance_9Filter_4];
	this.instance_9.cache(-3,-3,386,92);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(321).to({_off:false},0).wait(131).to({y:37.05},23,cjs.Ease.quadOut).wait(337));
	this.timeline.addTween(cjs.Tween.get(instance_9Filter_4).wait(321).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).wait(491));

	// Number_1
	this.instance_10 = new lib.Symbol3();
	this.instance_10.setTransform(624.9,177.7,1,1,0,0,0,6.1,11.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(413).to({_off:false},0).wait(39).to({y:117.7},23,cjs.Ease.quadOut).wait(337));

	// Number_0
	this.instance_11 = new lib.Symbol4();
	this.instance_11.setTransform(497.5,177.7,1,1,0,0,0,6.1,11.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(358).to({_off:false},0).wait(94).to({y:117.7},23,cjs.Ease.quadOut).wait(337));

	// Layer_21
	this.instance_12 = new lib.Symbol1();
	this.instance_12.setTransform(316.7,258,0.1316,0.2442,0,0,0,190.4,43);
	this.instance_12._off = true;
	var instance_12Filter_5 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_12.filters = [instance_12Filter_5];
	this.instance_12.cache(-3,-3,386,92);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(717).to({_off:false},0).wait(95));
	this.timeline.addTween(cjs.Tween.get(instance_12Filter_5).wait(717).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).wait(95));

	// Blinking_cursor
	this.instance_13 = new lib.blinkingcursor();
	this.instance_13.setTransform(448.55,96.2,1,1,0,0,0,0,8);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(168).to({_off:false},0).to({_off:true},153).wait(13).to({_off:false,x:488.55,y:178.2},0).to({_off:true},24).wait(27).to({_off:false,x:623.55},0).to({_off:true},28).wait(93).to({_off:false,x:448.55,y:258.7},0).to({_off:true},211).wait(95));

	// dropdown_highlight
	this.instance_14 = new lib.Dropdownhighlight01();
	this.instance_14.setTransform(526.6,318.6,0.8877,0.9444,0,0,0,191.6,18);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(445).to({_off:false},0).wait(7).to({y:258.6},23,cjs.Ease.quadOut).to({_off:true},1).wait(336));

	// dropdown_highlight
	this.instance_15 = new lib.dropdownhgihlight();
	this.instance_15.setTransform(527,366.05,1,1,0,0,0,171,15);
	this.instance_15.compositeOperation = "multiply";
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(527).to({_off:false},0).to({y:327.05},4).to({_off:true},1).wait(6).to({_off:false,y:329.05},0).to({y:293.05},4).to({_off:true},1).wait(8).to({_off:false,y:362.05},0).to({y:308.05},7).to({_off:true},1).wait(24).to({_off:false,y:353.05},0).to({y:316.05},7).to({_off:true},1).wait(35).to({_off:false,y:328.05},0).to({y:305.05},10).to({y:300.05},4).to({_off:true},1).wait(17).to({_off:false,y:366.05},0).to({_off:true},60).wait(94));

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_475 = new cjs.Graphics().p("A8qSSMAAAgkjMA5WAAAMAAAAkjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(475).to({graphics:mask_graphics_475,x:524.65,y:391.575}).wait(242).to({graphics:null,x:0,y:0}).wait(95));

	// No_filter_dropdown_2_svg
	this.instance_16 = new lib.Nofilterlist02();
	this.instance_16.setTransform(527.5,798.7,0.9034,0.9033,0,0,0,191.5,580.2);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(475).to({_off:false},0).wait(31).to({y:-61.3},152,cjs.Ease.quadOut).to({_off:true},59).wait(95));

	// small_dropdown_highlight
	this.instance_17 = new lib.dropdownsmallhighlight();
	this.instance_17.setTransform(524.5,177.9,1,1,0,0,0,45.2,16.1);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(340).to({_off:false},0).wait(49).to({x:654.5},0).to({_off:true},35).wait(388));

	// Customers_svg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AB7ATQgGgHAAgLQAAgLAGgIQAGgGAKAAQAKAAAGAFQAFAHAAAJIAAAGIggAAQAAAGADAEQAEAEAGAAIAIgBIAIgCIAAAIIgHACIgJABQgLAAgHgGgACDgNQgDAEAAAFIAWAAQAAgGgDgDQgDgDgFAAQgFAAgDADgAAYAWQgEgDgDgGQgEgFAAgIQABgLAGgHQAGgGALAAQAKAAAHAGQAFAIAAAKQAAAMgFAHQgGAGgLAAQgHAAgGgDgAAbgMQgDAFAAAHQAAAQANAAQAMAAAAgQQAAgQgMAAQgHAAgDAEgAh1ATQgGgHAAgLQAAgLAGgIQAFgGALAAQAKAAAFAFQAGAGAAAKIAAAGIghAAQAAAGAFAEQACAEAIAAIAIgBIAHgCIAAAIIgHACIgJABQgLAAgHgGgAhtgNQgCADgCAGIAXAAQAAgGgDgDQgDgDgFAAQgFAAgDADgABTAYIgTgvIALAAIANAmIABAAQAAgCADgJIAJgbIALAAIgSAvgAgHAYIAAgcQAAgFgCgEQgCgDgFAAQgGAAgCAEQgDAEAAAHIAAAZIgLAAIAAgcQAAgGgCgDQgCgDgFAAQgFAAgEAEQgCAEAAAIIAAAYIgKAAIAAgvIAIAAIABAGIAAAAQACgDAFgCQAEgCAEAAQAMAAADAIIAAAAQADgEADgCQAEgCAFAAQAKAAADAEQADAEAAAKIAAAegAifAYIAAgvIAIAAIABAIIABAAQADgEADgCQADgDAGAAIAEAAIgBAKIgEAAQgGAAgEADQgEAFAAAGIAAAYg");
	this.shape_1.setTransform(316.1199,156.9628,0.8975,0.8975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiTBGQgcAAgVgVQgUgUgBgdQABgcAUgVQAVgUAcAAIEnAAQAcAAAVAUQAUAVABAcQgBAdgUAUQgVAVgcAAg");
	this.shape_2.setTransform(316.3442,156.4243,0.8975,0.8975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAEDEF").s().p("AmnC0QghAAgXgXQgYgXAAgiIAAjHQAAghAYgYQAXgXAhAAINPAAQAhAAAXAXQAYAYAAAhIAADHQAAAigYAXQgXAXghAAg");
	this.shape_3.setTransform(653.0272,177.9637,0.8975,0.8975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#16191C").s().p("AA6AsQgIgKAAgTQAAgRAIgLQAIgKAPAAQAPAAAIALIABAAIgBgKIAAgfIAMAAIAABpIgKAAIgBgKIgBAAQgHAMgQAAQgPAAgIgKgABDgFQgFAGAAAOQAAAPAFAHQAFAHAKAAQAMAAAFgGQAFgGAAgOIAAgDQAAgPgFgGQgFgHgMAAQgKAAgFAIgAhsAwQgHgGAAgKQAAgXAlgBIAMAAIAAgFQAAgIgDgEQgEgEgIAAQgJAAgNAFIgDgIIAMgFQAGgCAHAAQAOAAAGAGQAHAGAAAMIAAAzIgJAAIgCgKIgBAAQgFAHgGACQgFADgJAAQgLAAgGgGgAhNAQQgNAAgHAEQgGAEAAAIQAAAGAEADQAFAEAFAAQALAAAGgGQAGgGAAgLIAAgGgAATA0IAAgwQAAgIgEgFQgEgEgJAAQgLAAgFAGQgGAHAAANIAAAnIgLAAIAAhJIAJAAIACAKIABAAQADgFAGgEQAHgDAGAAQAOAAAHAHQAHAHAAANIAAAwg");
	this.shape_4.setTransform(588.4953,178.6593,0.8975,0.8975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAEDEF").s().p("Al8CiQgdAAgVgWQgVgUAAgeIAAiyQAAgeAVgWQAVgUAdAAIL5AAQAdAAAVAUQAVAWAAAeIAACyQAAAegVAUQgVAWgdAAg");
	this.shape_5.setTransform(524.5,177.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#16191C").s().p("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");
	this.shape_6.setTransform(411.7284,138.6094,0.8975,0.8975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#16191C").s().p("AA/AoQgIgJAAgSQAAgQAIgJQAHgKAOAAQANAAAIAKIAAAAIgBglIAPAAIAABhIgLAAIgDgJIgBAAQgGALgPAAQgMAAgIgKgABLgDQgEAFAAAMQAAALAEAHQAEAGAIAAQAJAAAFgGQADgEABgMIAAgCQAAgOgEgEQgEgGgKABQgIgBgEAHgAAYAwIAAgrQAAgGgDgEQgEgEgHAAQgKgBgDAGQgEAEAAANIAAAjIgPAAIAAhFIAMAAIACAJIABAAQADgFAFgCQAGgDAHAAQAZAAAAAZIAAAtgAgxAwIgJgZIgjAAIgJAZIgQAAIAihbIARAAIAiBbgAhRgOIgIAYIAbAAIgOgpQgCAKgDAHg");
	this.shape_7.setTransform(508.4256,248.8113,0.8975,0.8974);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#16191C").s().p("AgFAgIg0g0QgDgDAAgDQABgIAHAAQAFAAABACIAuAvIAvgvQACgCADAAQAJAAAAAIQAAAEgCACIg0A0QgEADgDAAQgDAAgCgDg");
	this.shape_8.setTransform(547.4882,248.5197,0.8975,0.8974);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EAEDEF").s().p("AlhC0QghAAgYgXQgXgYAAghIAAjHQAAgiAXgXQAYgXAhAAILDAAQAiAAAXAXQAXAXAAAiIAADHQAAAhgXAYQgXAXgiAAg");
	this.shape_9.setTransform(524.4904,248.228,0.8975,0.8974);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#16191C").s().p("ACCApQgIgKgBgRQAAgQAJgKQAJgKAOAAQAOAAAIAJQAIAIAAAOIAAAIIguAAQAAAKAGAGQAFAFAJAAIAMgBIALgEIAAAMQgEADgHABQgFABgIAAQgPAAgLgJgACOgGQgEAFgBAHIAgAAQAAgHgFgFQgDgEgIAAQgGAAgFAEgAA3ApQgJgKAAgRQAAgQAJgKQAJgKAPAAQANAAAIAJQAJAIgBAOIAAAIIguAAQAAAKAFAGQAGAFAJAAIALgBIAMgEIAAAMQgFADgGABQgFABgHAAQgQAAgLgJgABDgGQgEAFgBAHIAgAAQAAgHgEgFQgFgEgGAAQgIAAgEAEgAhpAcIAAglIgJAAIAAgHIAKgFIAGgPIAJAAIAAAQIATAAIAAALIgTAAIAAAkQAAAGACACQADADAEAAIALgCIAAALIgGACIgIABQgVAAgBgWgAiwApQgJgLAAgQQAAgQAJgKQAIgKAQAAQANAAAIAJQAJAJgBANIAAAIIgvAAQACALAEAFQAGAFAIAAIANgBIALgEIAAAMIgLAEQgGABgHAAQgQAAgKgJgAikgGQgEAFgBAHIAgAAQgBgHgEgFQgDgEgHAAQgIAAgEAEgAj3AoIgBAAIgDAJIgKAAIAAhiIAOAAIgBAmIABAAQAIgLAOAAQANAAAGAKQAIAKAAAQQAAARgIAJQgHAKgNAAQgNAAgIgKgAjygEQgEAEgBANIAAABQABANAEAFQAEAGAIAAQAJAAAEgGQAEgHAAgMQAAgXgRAAQgIAAgEAGgAD3AxIAAgrQAAgGgDgGQgDgEgHAAQgKAAgEAGQgEAFAAANIAAAjIgQAAIAAhFIAMAAIADAJIAAAAQADgFAGgDQAGgDAHAAQAaAAgBAZIAAAugAACAxIgOg4IgBAAIgPA4IgQAAIgUhFIAPAAIAJAhIAFAWIAAAAIACgKIACgJIALgkIAQAAIANA3IABAAQAAgHAFgPIAJghIAOAAIgTBFg");
	this.shape_10.setTransform(390.6094,178.5662,0.8975,0.8974);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#16191C").s().p("AgFAgIg0g0QgDgDAAgDQAAgDADgCQACgDADAAQAEAAACADIAuAuIAvguQACgDAEAAQADAAACADQADACAAADQAAADgDADIg0A0QgCADgEAAQgCAAgDgDg");
	this.shape_11.setTransform(451.0768,178.2745,0.8975,0.8974);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EAEDEF").s().p("AosC0QgiAAgXgXQgXgXAAgiIAAjHQAAghAXgYQAXgXAiAAIRZAAQAhAAAYAXQAXAYAAAhIAADHQAAAigXAXQgYAXghAAg");
	this.shape_12.setTransform(411.6776,177.9604,0.8975,0.8974);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F6F6F6").ss(2,0,0,4).p("AMHAAI4NAA");
	this.shape_13.setTransform(641.2472,248.6848,0.8975,0.8975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F6F6F6").ss(2,0,0,4).p("AOMAAI8XAA");
	this.shape_14.setTransform(397.8168,248.6848,0.8975,0.8975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#16191C").s().p("ACKApQgJgKAAgRQAAgRAJgJQAIgJAPAAQAOAAAIAIQAIAJAAANIAAAIIgvAAQABALAFAFQAFAFAKAAIALgBQAFAAAHgEIAAANIgLADIgNABQgRAAgJgJgACWgGQgEAEgBAJIAfAAQAAgJgEgEQgDgEgIAAQgHAAgEAEgABTAcIAAglIgJAAIAAgGIAKgGIAFgPIAJAAIAAAQIAUAAIAAALIgUAAIAAAlQAAAFADADQADACAEAAIALgBIAAALIgGACIgIAAQgWAAAAgWgAiLAuQgHgEgEgJQgEgJAAgKQAAgQAJgKQAIgJAQAAQAPAAAJAJQAJAKAAAQQAAARgJAKQgIAJgQAAQgKAAgIgEgAiHgDQgEAGAAALQAAAYASAAQASAAAAgYQAAgXgSAAQgJAAgFAGgADQAxIAAhFIAMAAIACAMIABAAQADgGAGgEQAFgDAHAAIAHAAIgBAOIgHgBQgJAAgFAGQgGAFAAAJIAAAlgAAuAxIAAhiIAPAAIAABigAAJAxIAAhFIAPAAIAABFgAgiAxIAAg6IgLAAIAAgHIALgEIAAgFQAAgMAGgGQAGgGAMAAQAJAAAFACIgDALIgKgBQgFAAgCADQgDADAAAGIAAAFIARAAIAAALIgRAAIAAA6gAjAAxIgthJIgBAAIABAEIABBFIgOAAIAAhcIASAAIAuBJIAAAAIgBhJIAOAAIAABcgAALghQgDgCAAgEQAAgEADgCQACgCAEAAQAEAAACACQACACAAAEQAAADgCADQgCACgEAAQgEAAgCgCg");
	this.shape_15.setTransform(389.7343,319.0116,0.8975,0.8974);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#16191C").s().p("AgFAgIg0g1QgDgCAAgDQAAgIAIAAQAEAAACACIAuAwIAvgwQACgCAEAAQAIAAAAAIQAAADgDACIg0A1QgBACgFABQgCAAgDgDg");
	this.shape_16.setTransform(678.4524,318.7649,0.8975,0.8974);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EAEDEF").s().p("A8qC0QghAAgYgYQgXgXAAghIAAjHQAAghAXgXQAYgYAhAAMA5VAAAQAhAAAYAYQAXAXAAAhIAADHQAAAhgXAXQgYAYghAAg");
	this.shape_17.setTransform(526.3526,318.4508,0.8975,0.8974);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#16191C").s().p("AghAzIAAgNIAagaIALgMQAFgFACgGQADgDAAgHQAAgHgEgEQgFgEgFAAQgGAAgGACIgMAIIgJgLIAJgGIALgFQAGgCAHAAQAJAAAHAEQAHADADAGQAEAGAAAIQAAAIgDAHQgDAHgGAFQgIAKgGAFIgRARIAAAAIAvAAIAAAPg");
	this.shape_18.setTransform(315.9179,318.8899,0.8975,0.8975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#16191C").s().p("AAGAyIAAhSIgEAEIgOAMIgIgKIAcgXIANAAIAABjg");
	this.shape_19.setTransform(315.1775,139.462,0.8975,0.8975);

	this.instance_18 = new lib.Tween3("synched",0);
	this.instance_18.setTransform(503.8,234.35);
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween4("synched",0);
	this.instance_19.setTransform(503.8,174.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},321).to({state:[{t:this.instance_18}]},131).to({state:[{t:this.instance_19}]},23).wait(337));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(452).to({_off:false},0).to({_off:true,y:174.35},23,cjs.Ease.quadOut).wait(337));

	// dropdown_highlight
	this.instance_20 = new lib.dropdownhgihlight();
	this.instance_20.setTransform(526.7,196.7,0.9949,1,0,0,0,171.1,15.1);
	this.instance_20.compositeOperation = "multiply";
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(218).to({_off:false},0).to({y:172.7},5).wait(1).to({y:229.7},0).to({scaleX:0.9948,y:191.25},8).to({scaleX:0.9949,y:156.7},8).wait(1).to({y:312.7},0).wait(1).to({regX:171,regY:15,x:526.6,y:309.3},0).wait(1).to({y:306},0).wait(1).to({y:302.75},0).wait(1).to({scaleX:0.9948,y:299.65},0).wait(1).to({y:296.75},0).wait(1).to({y:294.1},0).wait(1).to({y:291.7},0).wait(1).to({y:289.6},0).wait(1).to({regX:171.1,regY:15.1,x:526.7,y:287.85},0).wait(1).to({regX:171,regY:15,x:526.55,y:284.8},0).wait(1).to({y:282.3},0).wait(1).to({scaleX:0.9949,y:280.1},0).wait(1).to({y:278.25},0).wait(1).to({y:276.75},0).wait(1).to({y:275.45},0).wait(1).to({y:274.45},0).wait(1).to({y:273.6},0).wait(1).to({y:273},0).wait(1).to({regX:171.1,regY:15.1,x:526.7,y:272.7},0).wait(1).to({y:304.7},0).to({y:301.7},10).wait(1).to({regX:171,regY:15,scaleX:1,x:527,y:238.05},0).to({_off:true},49).wait(491));

	// MASK (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_159 = new cjs.Graphics().p("A8qSSMAAAgkjMA5WAAAMAAAAkjg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(159).to({graphics:mask_1_graphics_159,x:524.65,y:229.575}).wait(162).to({graphics:null,x:0,y:0}).wait(491));

	// first_dropdown_menu_svg
	this.instance_21 = new lib.firstdropdownmenu();
	this.instance_21.setTransform(526.5,306.5,1,1,0,0,0,170,194);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(159).to({_off:false},0).wait(60).to({y:156.5},48,cjs.Ease.quadOut).to({_off:true},54).wait(491));

	// shadow
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCCCCC").s().p("A6tSIMAAAgkPMA1bAAAMAAAAkPg");
	this.shape_20.setTransform(527,232.55);
	this.shape_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(159).to({_off:false},0).to({_off:true},162).wait(491));

	// dropdown_highlight
	this.instance_22 = new lib.Dropdownhighlight01();
	this.instance_22.setTransform(526.6,95.55,0.8877,0.9444,0,0,0,191.6,18);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(154).to({_off:false},0).to({_off:true},54).wait(604));

	// checkmark_svg
	this.instance_23 = new lib.Checkmark();
	this.instance_23.setTransform(156.7,296.4,0.6785,0.6785,0,0,0,8,7.8);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(59).to({_off:false},0).wait(1).to({regX:7,regY:7,x:156,y:295.85},0).wait(60).to({regX:8,regY:7.8,x:156.7,y:296.4},0).to({scaleX:0.6909,scaleY:0.6909,x:147.15,y:300.05},1).wait(1).to({regX:7,regY:7,scaleX:0.7027,scaleY:0.7027,x:137.3,y:302.9},0).wait(1).to({scaleX:0.7145,scaleY:0.7145,x:128.25,y:306.4},0).wait(1).to({scaleX:0.7263,scaleY:0.7263,x:119.2,y:309.85},0).wait(1).to({scaleX:0.7379,scaleY:0.7379,x:110.2,y:313.25},0).wait(1).to({scaleX:0.7493,scaleY:0.7493,x:101.5,y:316.6},0).wait(1).to({scaleX:0.7603,scaleY:0.7603,x:92.95,y:319.85},0).wait(1).to({scaleX:0.7709,scaleY:0.7709,x:84.8,y:323},0).wait(1).to({scaleX:0.7811,scaleY:0.7811,x:76.95,y:325.95},0).wait(1).to({scaleX:0.7908,scaleY:0.7908,x:69.5,y:328.85},0).wait(1).to({scaleX:0.7999,scaleY:0.7999,x:62.45,y:331.5},0).wait(1).to({scaleX:0.8086,scaleY:0.8086,x:55.8,y:334.05},0).wait(1).to({scaleX:0.8167,scaleY:0.8167,x:49.55,y:336.4},0).wait(1).to({scaleX:0.8242,scaleY:0.8242,x:43.7,y:338.65},0).wait(1).to({scaleX:0.8313,scaleY:0.8313,x:38.25,y:340.7},0).wait(1).to({scaleX:0.8379,scaleY:0.8379,x:33.2,y:342.65},0).wait(1).to({scaleX:0.8439,scaleY:0.8439,x:28.55,y:344.45},0).wait(1).to({scaleX:0.8495,scaleY:0.8495,x:24.25,y:346.1},0).wait(1).to({scaleX:0.8547,scaleY:0.8547,x:20.25,y:347.65},0).wait(1).to({scaleX:0.8595,scaleY:0.8595,x:16.55,y:349},0).wait(1).to({scaleX:0.8638,scaleY:0.8638,x:13.2,y:350.3},0).wait(1).to({scaleX:0.8678,scaleY:0.8678,x:10.1,y:351.45},0).wait(1).to({scaleX:0.8715,scaleY:0.8715,x:7.35,y:352.55},0).wait(1).to({scaleX:0.8747,scaleY:0.8747,x:4.85,y:353.45},0).wait(1).to({scaleX:0.8777,scaleY:0.8777,x:2.55,y:354.4},0).wait(1).to({scaleX:0.8804,scaleY:0.8804,x:0.5,y:355.15},0).wait(1).to({scaleX:0.8828,scaleY:0.8828,x:-1.3,y:355.9},0).wait(1).to({scaleX:0.8849,scaleY:0.8849,x:-2.95,y:356.5},0).wait(1).to({scaleX:0.8868,scaleY:0.8868,x:-4.4,y:357.05},0).wait(1).to({scaleX:0.8884,scaleY:0.8884,x:-5.7,y:357.5},0).wait(1).to({scaleX:0.8898,scaleY:0.8898,x:-6.7,y:357.95},0).wait(1).to({scaleX:0.891,scaleY:0.891,x:-7.65,y:358.3},0).wait(1).to({scaleX:0.892,scaleY:0.892,x:-8.4,y:358.55},0).wait(1).to({regX:6.9,regY:7.2,scaleX:0.8927,scaleY:0.8927,x:-8.15,y:359.55},0).wait(298).to({y:299.55},24,cjs.Ease.quadOut).wait(336));

	// Modal_01_svg
	this.instance_24 = new lib.CreateAudience();
	this.instance_24.setTransform(374.95,599.1,0.6768,0.6767,0,0,0,524.5,280.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({x:375,y:217.55},30,cjs.Ease.quadOut).wait(30).to({regY:280,y:217.5},0).wait(59).to({regY:280.1,y:217.55},0).wait(1).to({regY:280,scaleX:0.6831,scaleY:0.6834,x:372.2,y:218.55},0).wait(1).to({regY:280.1,scaleX:0.6894,scaleY:0.6901,x:369.55,y:219.7},0).wait(1).to({regY:280,scaleX:0.7013,scaleY:0.7028,x:364.4,y:221.55},0).wait(1).to({scaleX:0.7133,scaleY:0.7155,x:359.2,y:223.6},0).wait(1).to({scaleX:0.7252,scaleY:0.7282,x:354.05,y:225.6},0).wait(1).to({scaleX:0.737,scaleY:0.7407,x:348.95,y:227.6},0).wait(1).to({scaleX:0.7485,scaleY:0.7529,x:343.95,y:229.5},0).wait(1).to({scaleX:0.7597,scaleY:0.7648,x:339.1,y:231.4},0).wait(1).to({scaleX:0.7705,scaleY:0.7762,x:334.45,y:233.2},0).wait(1).to({scaleX:0.7808,scaleY:0.7872,x:330,y:234.9},0).wait(1).to({scaleX:0.7906,scaleY:0.7976,x:325.75,y:236.55},0).wait(1).to({scaleX:0.7999,scaleY:0.8075,x:321.75,y:238.1},0).wait(1).to({scaleX:0.8086,scaleY:0.8168,x:317.95,y:239.6},0).wait(1).to({scaleX:0.8169,scaleY:0.8255,x:314.4,y:240.95},0).wait(1).to({scaleX:0.8245,scaleY:0.8337,x:311.05,y:242.25},0).wait(1).to({scaleX:0.8317,scaleY:0.8413,x:307.95,y:243.45},0).wait(1).to({scaleX:0.8383,scaleY:0.8484,x:305.1,y:244.55},0).wait(1).to({scaleX:0.8445,scaleY:0.8549,x:302.45,y:245.55},0).wait(1).to({scaleX:0.8502,scaleY:0.861,x:299.95,y:246.55},0).wait(1).to({scaleX:0.8554,scaleY:0.8665,x:297.7,y:247.45},0).wait(1).to({scaleX:0.8603,scaleY:0.8717,x:295.6,y:248.25},0).wait(1).to({scaleX:0.8647,scaleY:0.8764,x:293.7,y:249},0).wait(1).to({scaleX:0.8687,scaleY:0.8806,x:291.95,y:249.7},0).wait(1).to({scaleX:0.8724,scaleY:0.8846,x:290.35,y:250.25},0).wait(1).to({scaleX:0.8757,scaleY:0.8881,x:288.9,y:250.8},0).wait(1).to({scaleX:0.8788,scaleY:0.8913,x:287.6,y:251.3},0).wait(1).to({scaleX:0.8815,scaleY:0.8942,x:286.4,y:251.75},0).wait(1).to({scaleX:0.8839,scaleY:0.8968,x:285.4,y:252.2},0).wait(1).to({scaleX:0.886,scaleY:0.8991,x:284.45,y:252.6},0).wait(1).to({scaleX:0.8879,scaleY:0.9011,x:283.6,y:252.9},0).wait(1).to({scaleX:0.8896,scaleY:0.9028,x:282.95,y:253.15},0).wait(1).to({scaleX:0.891,scaleY:0.9043,x:282.3,y:253.4},0).wait(1).to({scaleX:0.8922,scaleY:0.9056,x:281.8,y:253.55},0).wait(1).to({scaleX:0.8932,scaleY:0.9067,x:281.4,y:253.8},0).wait(1).to({regX:524.4,regY:279.9,scaleX:0.894,scaleY:0.9075,x:281,y:254},0).wait(298).to({y:194},24,cjs.Ease.quadOut).wait(336));

	// Modal_shadow
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("Eg3sAc6MAAAg5zMBvZAAAMAAAA5zg");
	this.shape_21.setTransform(376.45,224.55);
	this.shape_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(30).to({_off:false},0).wait(782));

	// Layer_1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("Eg6lAhwMAAAhDfMB1LAAAMAAABDfg");
	this.shape_22.setTransform(375,216);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(812));

	// stageBackground
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("Eg8JgjTMB4TAAAMAAABGnMh4TAAAg");
	this.shape_23.setTransform(375,216);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Eg8JAjUMAAAhGnMB4TAAAMAAABGng");
	this.shape_24.setTransform(375,216);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23}]}).wait(812));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_3, startFrame:168, endFrame:168, x:-3, y:-3, w:386, h:92});
	this.filterCacheList.push({instance: this.instance_3, startFrame:0, endFrame:0, x:-3, y:-3, w:386, h:92});
	this.filterCacheList.push({instance: this.instance_3, startFrame:587, endFrame:587, x:-3, y:-3, w:386, h:92});
	this.filterCacheList.push({instance: this.instance_4, startFrame:24, endFrame:24, x:7, y:-4, w:199, h:34});
	this.filterCacheList.push({instance: this.instance_4, startFrame:25, endFrame:40, x:7, y:-4, w:199, h:34});
	this.filterCacheList.push({instance: this.instance_4, startFrame:125, endFrame:134, x:7, y:-4, w:199, h:34});
	this.filterCacheList.push({instance: this.instance_5, startFrame:24, endFrame:24, x:-3, y:-3, w:386, h:92});
	this.filterCacheList.push({instance: this.instance_5, startFrame:0, endFrame:0, x:-3, y:-3, w:386, h:92});
	this.filterCacheList.push({instance: this.instance_9, startFrame:321, endFrame:321, x:-3, y:-3, w:386, h:92});
	this.filterCacheList.push({instance: this.instance_9, startFrame:0, endFrame:0, x:-3, y:-3, w:386, h:92});
	this.filterCacheList.push({instance: this.instance_12, startFrame:717, endFrame:717, x:-3, y:-3, w:386, h:92});
	this.filterCacheList.push({instance: this.instance_12, startFrame:0, endFrame:0, x:-3, y:-3, w:386, h:92});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(187.2,156,562.9000000000001,632.5);
// library properties:
lib.properties = {
	id: 'C6C48ED588EA1341AD4527AE26E5FDC3',
	width: 100%,
	height: 100%,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C6C48ED588EA1341AD4527AE26E5FDC3'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
