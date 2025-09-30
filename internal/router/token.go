package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/hcd233/go-backend-tmpl/internal/config"
	"github.com/hcd233/go-backend-tmpl/internal/handler"
	"github.com/hcd233/go-backend-tmpl/internal/middleware"
	"github.com/hcd233/go-backend-tmpl/internal/protocol"
)

func initTokenRouter(r fiber.Router) {
	tokenHandler := handler.NewTokenHandler()

	tokenRouter := r.Group("/token")
	{
		tokenRouter.Post(
			"/refresh",
			middleware.RateLimiterMiddleware("refreshToken", "", config.JwtAccessTokenExpired/4, 2),
			middleware.ValidateBodyMiddleware(&protocol.RefreshTokenBody{}),
			tokenHandler.HandleRefreshToken,
		)
	}
}
