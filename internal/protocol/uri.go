package protocol

// UserURI 用户路径参数
//
//	author centonhuang
//	update 2024-09-18 02:50:19
type UserURI struct {
	UserID uint `uri:"userID" binding:"required"`
}
