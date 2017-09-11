var foo = "jimmy";
var bar ="bandybandy";
var bandy = "anotherbandy";
var text1;
var text2;
var text3;
var diamond;
var firstbase;
var svgContainer;
var svgBorder;
function init(){ 
//Make an SVG Container
svgContainer = d3.select("body").append("svg")
                                .attr("width", 400)
                                .attr("height", 400)
                                .attr("border", "1px")
                                
 
//append text elements
svgBorder = svgContainer.selectAll("svgBorder")
.data("d")
.enter()
.append("rect");

text1 = svgContainer.selectAll("text1")
                    .data("d")
                    .enter()
                    .append("text");
 
text2 = svgContainer.selectAll("text2")
                    .data("d")
                    .enter()
                    .append("text");
diamond = svgContainer.selectAll("diamond")
                        .data("d")
                        .enter()
                        .append("rect");
firstbase = svgContainer.selectAll("firstbase")
                        .data("d")
                        .enter()
                        .append("rect");

//set element attributes
text1
    .attr("x", 50)
    .attr("y", 30)
    .text( foo)
    .attr("font-family", "sans-serif")
    .attr("font-size", "20px")
    .attr("fill", "red")
    .attr("cursor", "default");

text2   
    .attr("x" , 50)
    .attr("y", 50)
    .text(bar)
    .attr("font-family", "sans-serif")
    .attr("font-size","20px")
    .attr("fill" , "white")
    .attr("onclick","switcheroo()")
    .attr("cursor","default");

diamond
    .attr("x" , 0)
    .attr("y" , 0)
    .attr("height" , 100)
    .attr("width" , 100)
    .attr("fill" , "blue")
    .attr("transform", "rotate(-45 200 -150)");


firstbase
    .attr("x" , 0)
    .attr("y", 0)
    .attr("height", 10)
    .attr("width" , 10)
    .attr("fill" , "white")
    .attr("transform" , "rotate(-45 265 -300)");

svgBorder
    .attr("stroke" , "black")
    .attr("border" , "1px")
    .attr("height", 400)
    .attr("width", 400)
}


function switcheroo(){
    text1.text(bar);
    text2.text(foo);
    text2.attr("fill","green");
    firstbase.attr("fill", "white")
    
    text3 = svgContainer.selectAll("text3")
                        .data("d")
                        .enter()
                        .append("text");
    text3
        .attr("x" , 50)
        .attr("y", 70)
        .text(bandy)
        .attr("font-family", "sans-serif")
        .attr("font-size","20px")
        .attr("fill" , "aliceblue")
        .attr("cursor","default");
}