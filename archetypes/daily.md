+++
date = '{{ .Date }}'
draft = false
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
+++

<!-- 
$ hugo new --kind daily content/daily/$(date +%Y-%m-%d-%a).md
$ hugo new --kind daily content/daily/title_you_want.md
-->