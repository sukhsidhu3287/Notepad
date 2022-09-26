var newnote = 1;
var idno = ["0"];

$("#copy").click(function () {
    var ans = document.getElementById("textar");
    ans.select();
    // copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(ans.value);
    alert("copied : " + ans.value);
});

$("#title").click(function () {
    var t = prompt("enter title :");
    if (t.length > 0) {
        $("#title").text(t);
    }
    else {
        alert("name cannot be empty")
    }
});

$("#help").click(function () {
    alert("-hover - file,insert,draw,view to know the functions   \n-click untitled to name your notebook      \n-click the respective button to perform any funtion")
})

$("#fl").hover(function () {
    var x = document.getElementById("file");
    x.style.display = "block";
}, function () {
    setTimeout(
        function () {
            var x = document.getElementById("file");
            x.style.display = "none";
        }, 500);
});

$("#ins").hover(function () {
    var x = document.getElementById("insert");
    x.style.display = "block";
}, function () {
    setTimeout(
        function () {
            var x = document.getElementById("insert");
            x.style.display = "none";
        }, 500);
});

$("#v").hover(function () {
    var x = document.getElementById("view");
    x.style.display = "block";
}, function () {
    setTimeout(
        function () {
            var x = document.getElementById("view");
            x.style.display = "none";
        }, 500);
});

function animate(id) {
    $('#' + id).fadeOut(100).fadeIn(100);

}

function getSize() {
    size = $("#textar").css("font-size");
    size = parseInt(size, 10);
    $("#font-size").text(size);
}

//get inital font size
getSize();

$("#up").on("click", function () {
    $("#textar").css("font-size", "+=1");
    $("#font-size").text(size += 1);
});

$("#down").on("click", function () {
    if (size > 1) {
        $("#textar").css("font-size", "-=1");
        $("#font-size").text(size -= 1);
    }
    else {
        alert("cannot decrease size less than 1")
    }
});
$(document).on('click', function () {
    var x = document.getElementById("fclr");
    document.getElementById("textar").style.color = x.value;
})

$(document).on('click', function () {
    var x = document.getElementById("bclr");
    document.getElementById("textar").style.backgroundColor = x.value;
    document.getElementById("textdiv").style.backgroundColor = x.value;
    document.getElementById("content").style.backgroundColor = x.value;
})

$("#bold").click(function () {
    var text = document.getElementById("textar");
    if (text.style.fontWeight == "bold") {
        text.style.fontWeight = "normal";
        document.getElementById("bold").style.borderColor = "rgb(26, 26, 26)";
    }
    else {
        text.style.fontWeight = "bold";
        document.getElementById("bold").style.borderColor = "green";
    }
})

$("#italic").click(function () {
    var text = document.getElementById("textar");
    if (text.style.fontStyle == "italic") {
        text.style.fontStyle = "unset";
        document.getElementById("italic").style.borderColor = "rgb(26, 26, 26)";
    }
    else {
        text.style.fontStyle = "italic";
        document.getElementById("italic").style.borderColor = "green";
    }
})

$("#underline").click(function () {
    var text = document.getElementById("textar");
    if (text.style.textDecoration == "underline") {
        text.style.textDecoration = "none";
        document.getElementById("underline").style.borderColor = "rgb(26, 26, 26)";
    }
    else {
        text.style.textDecoration = "underline";
        document.getElementById("underline").style.borderColor = "green";
    }
})


$("#save").click(function () {
    if (newnote == 1) {
        var t = prompt("enter title :");
        if (t.length > 0) {
            $("#title").text(t);
        }
        else {
            alert("name cannot be empty")
        }

        var ans = document.getElementById("textar");
        ans.select();
        // copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(ans.value);
        var area = document.getElementById("notes");
        var idn = idno[idno.length - 1];
        area.innerHTML += '<div class="notebooks" id =' + idn + ' onclick="shownote(this,this.id)"> <button id =' + idn + ' onclick = "deletel(this,this.id)">X</button><h3 id=t' + idn + '>' + $("#title").text() + '</h3><P>' + ans.value.slice(0, 100) + '</p> <p style="display:none;" id=p' + idn + '>' + ans.value + '<P> </div>'

        var b = parseInt(idn);
        b++;
        idn = b.toString();
        idno[b] = idn;
        console.log(idno);
    }
});

function shownote(curr, element) {
    // var text = this.text()
    var t = document.getElementById("t" + element);
    $("#title").text(t.textContent);
    var p = document.getElementById("p" + element);
    $("#textar").val(p.textContent);
}

function deletel(curr, element) {
    alert(" Clicked note will be deleted ");
    document.getElementById(element).remove();
}

$("#new").click(function () {
    $("#title").text("untitled Notebook");
    $("#textar").val("");
})
