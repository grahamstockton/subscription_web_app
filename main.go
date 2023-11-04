package main

import (
	"subscription_web_app/router"
)

func main() {

	r := router.SetupRouter()
	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
