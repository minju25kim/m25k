+++
date = '{{ .Date }}'
draft = false
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
+++

<!-- 
$ hugo new --kind howto content/howto/$(date +%Y-%m-%d-%a).md
$ hugo new --kind howto content/howto/title_you_want.md
-->