/**
  * Создает экземпляр "интерактивного" textarea
  * @name TextareaExtension
  * @param target - целевой нода textarea
  * @param processor - функция для проверки слова на выделение
  * @param font - шрифт 
  */
function TextareaExtension(target, processor, font)
{
	//Прямой поиск
	var findText = function (text, word) {
			for (var i = 0 ; i < text.length - word.length +1; i++) {
				var equals = true;
				for (var j = 0; j < word.length && equals; j++) {
					equals = (word[j] == text[i + j]);
				}
				if (equals) return i;
			}
	 }

	var setStyleOptions = function()
	{
		preItem.className = "text-area-selection";
		target.parentNode.appendChild(preItem);
		target.style.font = preItem.style.font = font || "14px Ariel";

		target.style.width = preItem.style.width = target.offsetWidth + "px";
		target.style.height = preItem.style.height = target.offsetHeight + "px";
		preItem.style.top = target.offsetTop + "px";
		preItem.style.left = target.offsetLeft + "px";
		target.style.background = "transparent";
		target.style.overflow = "scroll";
		preItem.style.margin = "0px 0px";
	}


    this.analyse = function (){

        var text = target.value;
        var words = text.split(/[\s]/);
        var textPosition = 0;
        var result = "";
        for (var i in words) {
            if (processor(words[i])) {
                var textIndex;
                if (text.indexOf) {
                    textIndex = text.indexOf(words[i]);
                }
                else textIndex = findText(text, words[i]);
				
				
                result += text.substr(0, textIndex) + "<span class='text-color-bordered text-checker'>" + words[i] + "</span>";
				
                text = text.substr(textIndex + words[i].length, text.length);
            }
        }
        result += text;
        //result = result.replace(/\n/g, "</br>");
        
        preItem.innerHTML = result;
    };

    this.scrollSync = function () {
        preItem.scrollTop = target.scrollTop;
    };

    this.resize = function () {
        preItem.style.width = target.style.width;
        preItem.style.height = target.style.height;
        preItem.style.top = target.offsetTop  + "px";
        preItem.style.left = target.offsetLeft + "px";
    };

    var preItem = document.createElement("pre");
   
    setStyleOptions();

    if (target.addEventListener) {
        target.addEventListener("change", this.analyse, false);
        target.addEventListener("keyup", this.analyse, false);
        target.addEventListener("scroll", this.scrollSync, false);
        target.addEventListener("mousemove", this.resize, false);
    }
    else
        if (target.attachEvent) {
            target.attachEvent("onchange", this.analyse);
            target.attachEvent("onkeyup", this.analyse);
            target.attachEvent("onscroll", this.scrollSync);
            target.attachEvent("mousemove", this.resize);
        }

    
}

//Example
var a,b;
window.onload = function () {
    a = new TextareaExtension(document.getElementById("areaId"), function (a) { return a.indexOf('а') >= 0; });
	
    b = new TextareaExtension(document.getElementById("areaId2"), function (a) { return a.indexOf('а') >= 0; });
}

