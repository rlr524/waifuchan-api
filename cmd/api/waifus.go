package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func (app *application) createWaifuHandler(c *gin.Context) {
	c.String(http.StatusOK, "create a new waifu")
}

func (app *application) showWaifusHandler(c *gin.Context) {

}

func (app *application) showWaifuHandler(c *gin.Context) {
	id := c.Param("id")
	c.String(http.StatusOK, "This is waifu with the id: %s", id)
}
