package main

import (
	_ "embed"
	"webtimizer/compression"

	"github.com/gen2brain/dlgs"
	"github.com/wailsapp/wails"
)

func basic() string {
	return "Hello World!"
}

func OpenFileDialog() []string {
	results, _, err := dlgs.FileMulti("Test", "")
	if err != nil {
		panic(err)
	}
	return results
}

//go:embed frontend/dist/app.js
var js string

//go:embed frontend/dist/app.css
var css string

func main() {

	app := wails.CreateApp(&wails.AppConfig{
		Width:  1024,
		Height: 768,
		Title:  "Webtimizer",
		JS:     js,
		CSS:    css,
	})
	app.Bind(basic)
	app.Bind(compression.Test)
	app.Bind(OpenFileDialog)

	app.Run()
}
