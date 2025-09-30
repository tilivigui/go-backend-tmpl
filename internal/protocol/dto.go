package protocol

// PageInfo 分页信息
//
//	author centonhuang
//	update 2025-01-05 12:26:07
type PageInfo struct {
	Page     int   `json:"page"`
	PageSize int   `json:"pageSize"`
	Total    int64 `json:"total"`
}

// PingResponse 健康检查响应
//
//	author centonhuang
//	update 2025-01-04 20:47:11
type PingResponse struct {
	Status string `json:"status"`
}

// RefreshTokenRequest 刷新令牌请求
//
//	author centonhuang
//	update 2025-01-04 17:16:09
type RefreshTokenRequest struct {
	RefreshToken string `json:"refreshToken"`
}

// RefreshTokenResponse 刷新令牌响应
//
//	author centonhuang
//	update 2025-01-04 17:16:12
type RefreshTokenResponse struct {
	AccessToken  string `json:"accessToken"`
	RefreshToken string `json:"refreshToken"`
}

// User 用户
//
//	author centonhuang
//	update 2025-01-05 11:37:01
type User struct {
	UserID    uint   `json:"userID"`
	Name      string `json:"name"`
	Email     string `json:"email,omitempty"`
	Avatar    string `json:"avatar"`
	CreatedAt string `json:"createdAt,omitempty"`
	LastLogin string `json:"lastLogin,omitempty"`
}

// CurUser 当前用户
//
//	author centonhuang
//	update 2025-01-05 11:37:32
type CurUser struct {
	User
	Permission string `json:"permission"`
}

// GetCurUserInfoRequest 获取当前用户信息请求
//
//	author centonhuang
//	update 2025-01-04 21:00:54
type GetCurUserInfoRequest struct {
	UserID uint `json:"userID"`
}

// GetCurUserInfoResponse 获取当前用户信息响应
//
//	author centonhuang
//	update 2025-01-04 21:00:59
type GetCurUserInfoResponse struct {
	User *CurUser `json:"user"`
}

// GetUserInfoRequest 获取用户信息请求
//
//	author centonhuang
//	update 2025-01-04 21:19:41
type GetUserInfoRequest struct {
	UserID uint `json:"userID"`
}

// GetUserInfoResponse 获取用户信息响应
//
//	author centonhuang
//	update 2025-01-04 21:19:44
type GetUserInfoResponse struct {
	User *User `json:"user"`
}

// UpdateUserInfoRequest 更新用户信息请求
//
//	author centonhuang
//	update 2025-01-04 21:19:47
type UpdateUserInfoRequest struct {
	UserID          uint   `json:"userID"`
	UpdatedUserName string `json:"updatedUserName"`
}

// UpdateUserInfoResponse 更新用户信息响应
//
//	author centonhuang
//	update 2025-01-05 11:35:18
type UpdateUserInfoResponse struct{}

// LoginRequest OAuth2登录请求
//
//	author centonhuang
//	update 2025-01-05 14:23:26
type LoginRequest struct{}

// LoginResponse OAuth2登录响应
//
//	author centonhuang
//	update 2025-01-05 14:23:26
type LoginResponse struct {
	RedirectURL string `json:"redirectURL"`
}

// CallbackRequest OAuth2回调请求
//
//	author centonhuang
//	update 2025-01-05 14:23:26
type CallbackRequest struct {
	Code  string `json:"code"`
	State string `json:"state"`
}

// CallbackResponse OAuth2回调响应
//
//	author centonhuang
//	update 2025-01-05 14:23:26
type CallbackResponse struct {
	AccessToken  string `json:"accessToken"`
	RefreshToken string `json:"refreshToken"`
}
