package data

import "time"

type Waifu struct {
	ID         string    `json:"id"`
	CreatedAt  time.Time `json:"created_at"`
	UpdatedAt  time.Time `json:"updated_at"`
	Name       string    `json:"name"`
	NameJp     string    `json:"name_jp"`
	Species    string    `json:"species"`
	Age        string    `json:"age"`
	Occupation string    `json:"occupation"`
	Anime      []string  `json:"anime"`
	Manga      []string  `json:"manga"`
	ProfileURL string    `json:"profile_url"`
}
