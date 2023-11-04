package cookie

import (
	"net/http"
	"time"
)

func SetCookie(writer http.ResponseWriter, name string, value string, expires time.Time) {
	http.SetCookie(writer, &http.Cookie{
		Name:     name,
		Domain:   "localhost",
		Path:     "/",
		Value:    value,
		Expires:  expires,
		HttpOnly: true,
		Secure:   true,
		SameSite: http.SameSiteNoneMode,
	})
}
