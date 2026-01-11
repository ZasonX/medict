package stardict

import (
	"encoding/json"
	"testing"

	"github.com/terasum/medict/pkg/model"
)

func TestStarDict_Lookup(t *testing.T) {
	dict, err := NewStardict(&model.DirItem{
		BaseDir:            "",
		CurrentDir:         "",
		IsValid:            false,
		DictType:           model.DictTypeStarDict,
		CoverImgPath:       "",
		CoverImgType:       "",
		ConfigPath:         "",
		LicensePath:        "",
		MdictMdxFileName:   "",
		MdictMdxAbsPath:    "",
		MdictMddAbsPath:    nil,
		StarDictDzAbsPath:  "testdata/stardict/eedic.pdb.dict.dz",
		StarDictAbsPath:    "testdata/stardict/eedic.pdb.dict",
		StarDictIdxAbsPath: "testdata/stardict/eedic.pdb.idx",
		StarDictIfoAbsPath: "testdata/stardict/eedic.pdb.ifo",
	})

	if err != nil {
		t.Fatal(err)
	}
	err = dict.BuildIndex()
	if err != nil {
		t.Fatal(err)
	}
	t.Logf("%+v", dict.Description())
	t.Logf("%+v", dict.Name())
	words, err := dict.Search("impair")
	if err != nil {
		t.Fatal(err)
	}
	data, err := json.MarshalIndent(words, "", " ")
	t.Logf("words: %s", data)
}
