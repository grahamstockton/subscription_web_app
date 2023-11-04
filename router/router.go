package router

import (
	"subscription_web_app/controller"

	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	r.GET("/ping", controller.GetPong)
	r.GET("/cookie", controller.GetCookie)
	r.GET("/content", controller.GetContent)

	return r
}
