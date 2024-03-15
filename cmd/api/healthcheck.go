package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func (app *application) healthcheckHandler(c *gin.Context) {
	c.String(http.StatusOK, "status: available\n")
	c.String(http.StatusOK, "environment: %s\n", app.config.env)
	c.String(http.StatusOK, "version: %s\n", version)
}
