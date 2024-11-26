+++
date = '{{ .Date }}'
draft = false
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
+++

<!-- 
$ hugo new --kind travel content/travel/$(date +%Y-%m-%d-%a).md
$ hugo new --kind travel content/travel/title_you_want.md
-->