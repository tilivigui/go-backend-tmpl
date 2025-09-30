package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/hcd233/go-backend-tmpl/internal/handler"
	"github.com/hcd233/go-backend-tmpl/internal/middleware"
	"github.com/hcd233/go-backend-tmpl/internal/protocol"
)

func initUserRouter(r fiber.Router) {
	userHandler := handler.NewUserHandler()

	userRouter := r.Group("/user", middleware.JwtMiddleware())
	{
		userRouter.Get("/current", userHandler.HandleGetCurUserInfo)
		userRouter.Patch("/", middleware.ValidateBodyMiddleware(&protocol.UpdateUserBody{}), userHandler.HandleUpdateInfo)
		userNameRouter := userRouter.Group("/:userID", middleware.ValidateURIMiddleware(&protocol.UserURI{}))
		{
			userNameRouter.Get("/", userHandler.HandleGetUserInfo)
		}

	}
}
