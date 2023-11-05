package controller

import (
	"fmt"
	"net/http"
	"strconv"
	cookie "subscription_web_app/auth"
	"time"

	"github.com/gin-gonic/gin"
)

var (
	username_hardcoded = "graham"
	password_hardcoded = "grahampassword"
)

func GetPong(c *gin.Context) {
	c.JSON(http.StatusOK, "pong")
}

// TODO: get imports working from parallel directories
func GetLogin(c *gin.Context) {
	username, password, ok := c.Request.BasicAuth()
	fmt.Println(c.Request)
	fmt.Println(username + "___" + password + "___" + strconv.FormatBool(ok))
	if !ok {
		c.JSON(http.StatusBadRequest, "Error processing login request. Please try again")
		return
	}

	if username_hardcoded != username {
		c.JSON(http.StatusUnauthorized, "Username or password does not match")
		return
	}

	if password_hardcoded != password {
		c.JSON(http.StatusUnauthorized, "Username or password does not match")
		return
	}

	expires := time.Now().AddDate(30, 0, 0)
	cookie.SetCookie(c.Writer, "paseto", "spooky token", expires)
	c.JSON(http.StatusOK, "Successfully logged in")
}

func GetContent(c *gin.Context) {
	_, err := c.Request.Cookie("paseto")
	if err != nil {
		c.JSON(http.StatusOK, "you stink, no content for you")
	} else {
		c.JSON(http.StatusOK, gin.H{"message": "SuPEr sEcREt cONtEnt"})
	}
}
