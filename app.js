var title = document.createElement("div")
title.className = "vaportitle"
title.innerText = "OL:OF"
appid.appendChild(title)

var items = document.createElement("center")

var tab = document.createElement("button")
tab.className = "vaportab"
tab.innerText = "Tab Cloak"
tab.setAttribute("onclick", 'new Nightmare({"title": "Cloak","type": "js","js": "https://cdn.jsdelivr.net/gh/FogNetwork/Vapor/tab.min.js","width": 400,"height": 300,"theme": "dark"})')
items.appendChild(tab)

var inspect = document.createElement("button")
inspect.className = "vaportab"
inspect.innerText = "Inspect"
inspect.setAttribute("onclick", "(function()%7B(function() %7Bvar x %3D document.createElement("script")%3Bx.src %3D "https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FSnowLord7%2Fdevconsole%40master%2Fmain.js"%3Bx.onload %3D alert("Loaded Developer Console!")%3Bdocument.head.appendChild(x)%3B%7D)()%7D)()")
items.appendChild(inspect)

appid.appendChild(items)

var vaporstyle = document.createElement("style")
vaporstyle.innerText = ".vaportitle {font-size: 60px; text-align: center; color: white; user-select: none; margin-top: 10px;}.vaportab{cursor: pointer;background: #303134;border-radius: 2.5px;height: 50px;text-align: center;line-height: 50px;color: white; border: none; font-size: 18px;user-select: none; margin: 5px;} .vaportab:hover {background: darkslategrey;}"
document.getElementsByTagName("html")[0].appendChild(vaporstyle)
