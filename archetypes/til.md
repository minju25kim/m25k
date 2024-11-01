+++
date = '{{ .Date }}'
draft = false
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
+++

<!-- 
$ hugo new --kind til content/til/$(date +%Y-%m-%d-%a).md
$ hugo new --kind til content/til/title_you_want.md
-->