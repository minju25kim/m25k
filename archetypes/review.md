+++
date = '{{ .Date }}'
draft = false
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
+++

<!-- 
$ hugo new --kind review content/review/$(date +%Y-%m-%d-%a).md
$ hugo new --kind review content/review/title_you_want.md
-->