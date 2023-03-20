function nuevo_enemigo () {
    enemigo = game.createSprite(randint(6, 4), 6)
}
input.onButtonPressed(Button.A, function () {
    cuadrado.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    cuadrado.change(LedSpriteProperty.X, 1)
})
let enemigo: game.LedSprite = null
let cuadrado: game.LedSprite = null
basic.clearScreen()
cuadrado = game.createSprite(2, 2)
let tiempo = 500
basic.forever(function () {
	
})
