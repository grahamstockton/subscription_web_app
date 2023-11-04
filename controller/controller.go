package controller

import (
	"net/http"
	cookie "subscription_web_app/auth"
	"time"

	"github.com/gin-gonic/gin"
)

func GetPong(c *gin.Context) {
	c.JSON(http.StatusOK, "pong")
}

// TODO: get imports working from parallel directories
func GetCookie(c *gin.Context) {
	expires := time.Now().AddDate(30, 0, 0)
	cookie.SetCookie(c.Writer, "paseto", "spooky token", expires)
}

func GetContent(c *gin.Context) {
	r := c.Request
	cook, err := r.Cookie("paseto")
	if err != nil {
		c.JSON(http.StatusOK, "you stink, no content for you")
	} else {
		c.JSON(http.StatusOK, "here is your stuff: "+cook.Value)
	}
}
