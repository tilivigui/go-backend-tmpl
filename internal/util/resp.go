package util

import (
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/hcd233/go-backend-tmpl/internal/protocol"
)

// SendHTTPResponse 发送HTTP响应
//
//	param c *fiber.Ctx
//	param data interface{}
//	param err error
//	author centonhuang
//	update 2025-01-04 17:34:06
func SendHTTPResponse(c *fiber.Ctx, data interface{}, err error) error {
	status := http.StatusOK
	rsp := protocol.HTTPResponse{}

	if err == nil {
		rsp.Data = data
		return c.Status(status).JSON(rsp)
	}
	rsp.Error = err.Error()

	switch err {
	case protocol.ErrDataNotExists, protocol.ErrDataExists: // 200
	case protocol.ErrBadRequest: // 400
		status = http.StatusBadRequest
	case protocol.ErrBadRequest: // 400
		status = http.StatusBadRequest
	case protocol.ErrUnauthorized: // 401
		status = http.StatusUnauthorized
	case protocol.ErrNoPermission, protocol.ErrInsufficientQuota: // 403
		status = http.StatusForbidden
	case protocol.ErrTooManyRequests: // 429
		status = http.StatusTooManyRequests
	case protocol.ErrInternalError: // 500
		status = http.StatusInternalServerError
	case protocol.ErrNoImplement: // 501
		status = http.StatusNotImplemented
	}

	return c.Status(status).JSON(rsp)
}
