package protocol

// RefreshTokenBody 刷新token请求体
//
//	Author centonhuang
//	Update 2024-11-09 02:56:39
type RefreshTokenBody struct {
	RefreshToken string `json:"refreshToken" binding:"required"`
}

// UpdateUserBody 更新用户请求体
//
//	author centonhuang
//	update 2024-09-18 02:39:31
type UpdateUserBody struct {
	UserName string `json:"userName" binding:"required"`
}
