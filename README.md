car-rental-3
============
## 困った事
* render と renderCar を１関数にしていたので、"追加"ボタンを押す度に車が多重に登録された
* form の addCar の子要素を p タグ で囲んだため、addCar の input 要素がとれなかった
```
　　× $('#addCar div').children('input').each(function(i, el)
　　○ $('#addCar div p').children('input').each(function(i, el)
```
