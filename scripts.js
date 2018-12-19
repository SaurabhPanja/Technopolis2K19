if (function () {
    function e(e) {
        return document.getElementById(e);
    }

    document.addEventListener("DOMContentLoaded", function () {
        e("loading");
        var n = e("progstat"),
            t = document.images,
            o = 0,
            r = t.length,
            i = document.querySelectorAll(".hideOnLoad");
        if (//disableScroll()
            setTimeout(function () {
                for (var e = i.length - 1; e >= 0; e--) i[e].style.display = "block";
                init(), animate(), setTimeout(start, 300)
            }, 100), 0 == r) return c();

        function a() {
            var e = (100 / r * (o += 1) << 0) + "%";
            //if (n.innerHTML = "Loading " + e, o === r) return c()
        }

        function c() {
            setTimeout(function () {
                enableScroll()
            }, 2500)
        }

        for (var l = 0; l < r; l++) {
            var s = new Image;
            s.onload = a, s.onerror = a, s.src = t[l].src
        }
    }, !1)
}(), /Edge/.test(navigator.userAgent) || /Safari/.test(navigator.userAgent)) var isSafari = !0;
else isSafari = !1;
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
    isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
    currentYear = (new Date).getFullYear(),
    copyRight = document.getElementById("copyRightYear"),
    copyRight2 = document.getElementById("copyRightYear2");

//function anchorLinkHandler(e) {
//    const n = e => Math.floor(e.getBoundingClientRect().top);
//    e.preventDefault();
//    const t = this.getAttribute("href"),
//        o = document.querySelector(t);
//    if (!o) return;
//    const r = n(o);
//    window.scrollBy({
//        top: r,
//        left: 0,
//        behavior: "smooth"
//    });
//    const i = setInterval(function () {
//        0 === n(o) && (o.tabIndex = "-1", o.focus(), clearInterval(i))
//    }, 100)
//}
//
//function navLinkHandler(e) {
//    const n = e => Math.floor(e.getBoundingClientRect().top);
//    e.preventDefault();
//    const t = this.getAttribute("href"),
//        o = document.querySelector(t);
//    if (!o) return;
//    const r = n(o);
//    window.scrollBy({
//        top: r,
//        left: 0
//    });
//    const i = setInterval(function () {
//        0 === n(o) && (o.tabIndex = "-1", o.focus(), clearInterval(i))
//    }, 100)
//}
//copyRight.innerHTML = currentYear, copyRight2.innerHTML = currentYear,
//    function () {
//        "use strict";
//        var e = window;
//        const n = document.getElementsByTagName("body")[0];
//        n.addEventListener("mousemove", function (n) {
//            if (t.style.left = n.clientX + "px", t.style.top = n.clientY + "px", menu.classList.contains("active")) return;
//            if (!isFirefox) {
//                var l = 1.5 * n.clientX / e.innerWidth * 100 - 100,
//                    s = 1.5 * n.clientY / e.innerHeight * 100 - 100;
//                TweenMax.to(i, 2, {
//                    rotationY: .06 * l,
//                    rotationX: -.06 * s,
//                    transformPerspective: 500,
//                    transformOrigin: "center center -100",
//                    ease: Expo.easeOut
//                }), TweenMax.to(o, 2, {
//                    rotationY: .06 * l,
//                    rotationX: -.06 * s,
//                    transformPerspective: 500,
//                    transformOrigin: "center center -450",
//                    ease: Expo.easeOut
//                }), TweenMax.to(r, 2, {
//                    rotationY: .06 * l,
//                    rotationX: -.06 * s,
//                    transformPerspective: 500,
//                    transformOrigin: "center center -300",
//                    ease: Expo.easeOut
//                })
//            }
//            if (isChrome)
//                for (var d = a.length - 1; d >= 0; d--) {
//                    var u = a[d];
//                    u.style.display = "block", c(u, n)
//                }
//        });
//        var t = document.getElementById("cursor");
//        n.addEventListener("mousedown", function (e) {
//            t.classList.add("clicked")
//        }), n.addEventListener("mouseup", function (e) {
//            setTimeout(function () {
//                t.classList.remove("clicked")
//            }, 300)
//        });
//        document.querySelectorAll(".section.active");
//        var o = document.querySelectorAll(".section-tagline-wrapper"),
//            r = document.querySelectorAll(".section-img-wrapper"),
//            i = document.querySelectorAll(".section-no-wrapper"),
//            a = (document.querySelectorAll(".pattern"), document.querySelectorAll(".pattern"));
//
//        function c(e, n) {
//            e.style.setProperty("--clip-position", n.clientX + "px " + n.clientY + "px")
//        }
//
//        function l(e) {
//            t.classList.add("hover")
//        }
//
//        function s(e) {
//            t.classList.remove("hover")
//        }
//        for (var d = document.querySelectorAll(".hover-target"), u = d.length - 1; u >= 0; u--) {
//            f(d[u])
//        }
//
//        function f(e) {
//            e.addEventListener("mouseover", l), e.addEventListener("mouseout", s)
//        }
//    }();
//const linksToAnchors = document.querySelectorAll(".scroll"),
//    navToAnchors = document.querySelectorAll(".scroll-nav");
//linksToAnchors.forEach(e => e.onclick = anchorLinkHandler), navToAnchors.forEach(e => e.onclick = navLinkHandler);
var a = document.getElementById("container");

//function start() {
//    a.classList.add("start")
//}
//
//function appear() {
//    a.classList.add("appear")
//}
//var renderer, scene, camera, composer, circle, skelet, particle, c = document.getElementById("canvas__bg"),
//    $ = c.getContext("2d"),
//    col = function (e, n, t, o, r) {
//        $.fillStyle = "rgb(" + t + "," + o + "," + r + ")", $.fillRect(e, n, 1, 1)
//    },
//    R = function (e, n, t) {
//        return Math.floor(130 + 64 * Math.cos((e * e - n * n) / 300 + t))
//    },
//    G = function (e, n, t) {
//        return Math.floor(0 + 64 * Math.sin((e * e * Math.cos(t / 4) + n * n * Math.sin(t / 3)) / 300))
//    },
//    B = function (e, n, t) {
//        return Math.floor(250 + 64 * Math.sin(5 * Math.sin(t / 9) + ((e - 100) * (e - 100) + (n - 100) * (n - 100)) / 1100))
//    },
//    t = 0,
//    run = function () {
//        for (x = 0; x <= 35; x++)
//            for (y = 0; y <= 35; y++) col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
//        t += .03, window.requestAnimationFrame(run)
//    };

function openMenu(e, n) {
    e.classList.add("is-active"), n.classList.add("active"), disableScroll()
}

function closeMenu(e, n) {
    e.classList.remove("is-active"), n.classList.remove("active"), enableScroll()
}

function preventDefault(e) {
    (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) return preventDefault(e), !1
}

function disableScroll() {
    //   window.addEventListener && window.addEventListener("DOMMouseScroll", preventDefault, !1), window.onwheel = preventDefault, window.onmousewheel = document.onmousewheel = preventDefault, window.ontouchmove = preventDefault, document.onkeydown = preventDefaultForScrollKeys
}

function enableScroll() {
    // window.removeEventListener && window.removeEventListener("DOMMouseScroll", preventDefault, !1), window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null, document.onkeydown = null
}

function init() {
    (renderer = new THREE.WebGLRenderer({
        antialias: !0,
        alpha: !0
    })).setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1), renderer.setSize(window.innerWidth, window.innerHeight), renderer.autoClear = !1, renderer.setClearColor(0, 0), document.getElementById("canvas__three").appendChild(renderer.domElement), scene = new THREE.Scene, (camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1e3)).position.z = 400, scene.add(camera), circle = new THREE.Object3D, skelet = new THREE.Object3D, particle = new THREE.Object3D, scene.add(circle), scene.add(skelet), scene.add(particle);
    for (var e = new THREE.TetrahedronGeometry(2, 0), n = new THREE.TetrahedronGeometry(7, 0), t = new THREE.IcosahedronGeometry(15, 0), o = new THREE.MeshPhongMaterial({
        color: 16777215,
        shading: THREE.FlatShading
    }), r = 0; r < 20; r++) {
        var i = new THREE.Mesh(e, o);
        i.position.set(Math.random() - .5, Math.random() - .5, Math.random() - .5).normalize(), i.position.multiplyScalar(90 + 700 * Math.random()), particle.add(i)
    }
    var a = new THREE.MeshPhongMaterial({
            color: 16777215,
            shading: THREE.FlatShading
        }),
        c = new THREE.MeshPhongMaterial({
            color: 16777215,
            wireframe: !0,
            side: THREE.DoubleSide
        }),
        l = new THREE.Mesh(n, a);
    l.scale.x = l.scale.y = l.scale.z = 16, circle.add(l);
    var s = new THREE.Mesh(t, c);
    s.scale.x = s.scale.y = s.scale.z = 10, skelet.add(s);
    var d = new THREE.AmbientLight(6710886);
    scene.add(d);
    var u = [];
    u[0] = new THREE.DirectionalLight(16777215, 1), u[0].position.set(1, 0, 0), u[1] = new THREE.DirectionalLight(15728895, 1), u[1].position.set(.75, 1, .5), u[2] = new THREE.DirectionalLight(3961855, 1), u[2].position.set(-.75, -1, .5), scene.add(u[0]), scene.add(u[1]), scene.add(u[2]), window.addEventListener("resize", onWindowResize, !1);
    window.mobilecheck = function () {
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|android|ipad|playbook|silk|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };

    if (window.mobilecheck() === true) {
        camera.aspect = window.innerWidth / (window.innerHeight + 70), camera.updateProjectionMatrix(), renderer.setSize(window.innerWidth, (window.innerHeight + 70));
    }

}

function onWindowResize() {

    if (window.mobilecheck() === false) {
        camera.aspect = window.innerWidth / window.innerHeight, camera.updateProjectionMatrix(), renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

function animate() {
    requestAnimationFrame(animate), particle.rotation.x += 0, particle.rotation.y -= .004, circle.rotation.x -= .002, circle.rotation.y -= .003, skelet.rotation.x -= .001, skelet.rotation.y += .002, renderer.clear(), renderer.render(scene, camera)
}

function activateSection() {
    /*if (!menu.classList.contains("active"))
        for (var e = window.scrollY, n = document.querySelectorAll(".section"), t = n.length - 1; t >= 0; t--) {
            o(n[t], e)
        }*/

    function o(e, n) {
        var t = e.offsetTop - e.clientHeight / 1.5,
            o = t + e.clientHeight + 200;
        n > t && n < o ? e.classList.add("active") : e.classList.remove("active")
    }
}

!function () {
    "use strict";
    var e = document.querySelectorAll(".c-hamburger");
    const n = document.getElementById("menu");
    for (var t = document.querySelectorAll(".nav-menu"), o = e.length - 1; o >= 0; o--) {
        var r = e[o];
        i(r, n)
    }

    function i(e, n) {
        e.addEventListener("click", function (t) {
            t.preventDefault(), !0 === this.classList.contains("is-active") ? closeMenu(e, n) : openMenu(e, n)
        })
    }

    for (o = t.length - 1; o >= 0; o--) {
        a(r, n, t[o])
    }

    function a(e, n, t) {
        t.addEventListener("click", function (t) {
            closeMenu(e, n)
        })
    }
}(), isSafari && (document.documentElement.className = "scroll-update-fix"), window.onload = function () {
}, window.addEventListener("scroll", function () {
    activateSection()
});
