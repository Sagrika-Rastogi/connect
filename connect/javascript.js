// Example 26-14: javascript.js

canvas               = O('logo')
context              = canvas.getContext('2d')
context.font         = 'bold italic 80px Century Gothic'
context.textBaseline = 'top'
image                = new Image()
image.src            = 'oo.png'

image.onload = function()
{
  gradient = context.createLinearGradient(0, 0, 0, 89)
  gradient.addColorStop(0.00, '#355')
  gradient.addColorStop(0.66, '#055')
  context.fillStyle = gradient
  context.fillText(  "C  nnect", 0, 0)
  context.strokeText("C  nnect", 0, 0)
  context.drawImage(image, 58, 30)
}

function O(i) { return typeof i == 'object' ? i : document.getElementById(i) }
function S(i) { return O(i).style                                            }
function C(i) { return document.getElementsByClassName(i)                    }
