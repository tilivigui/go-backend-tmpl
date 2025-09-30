package protocol

// HTTPResponse 标准响应体
//
//	author centonhuang
//	update 2024-09-16 03:41:34
type HTTPResponse struct {
	Data  interface{} `json:"data"`
	Error string      `json:"error,omitempty"`
}
