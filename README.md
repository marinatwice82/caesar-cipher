## Для запуска программы:
- скачайте репозиторий на свой компьютер;
- откройте ваш терминал и переместитесь в папку **Caesar-cipher-CLI**;
- установите зависимости командой *npm i*;
- установите модули: npm install commander, npm install through2
- запустите в командной строке файл **my_caesar_cli.js** c нужными аргументами-опциями.  

```
node my_caesar_cli.js ...options 
```  
**Доступные аргументы:**
- [**обязательный аргумент**] ```--action или -a``` - метод работы программы. Возможные параметры: encode или decode (encode - шифровка, decode- дешифровка);
- [**обязательный аргумент**] ```--shift или -s``` - ключ смещения. Может быть только положительным численным значением;
- ```--input или -i``` - путь к входному файлу. Если не задан, то пользователю будет предложено ввести текст в командную строку;
- ```--output или -o``` - путь к выходному файлу. Если не задан, то вывод результата преобразования будет в командную строку. 

## Примеры:
1. Для кодирования (необходимо ввести в командной строке)
node my_caesar_cli.js -s 3 -a "encode"
вводимое значение: abc
результат: xyz
2. Для декодирования (необходимо ввести в командной строке)
node my_caesar_cli.js -s 3 -a "decode"
вводимое заначение: xyz
результат: abc
3. В случае введения не верного значения ключа, например, вместо числа строка
node my_caesar_cli.js -s "ghj" -a "encode",
программа выведет сообщение об ошибке "error: enter number for option -s" 
4. Ключ должен иметь положительное значение, в случае введения отрицательного значения  ключа, например
node my_caesar_cli.js -s -3 -a "encode", то программа выведет сообщение об ошибке "error: option -s must have a positive number"
5.Чтобы считать из файла нужно ввести аргмент -i (если не указан файл для записи результата, то результат будет отображен в командной строке)
node my_caesar_cli.js -s 3 -m "encode" -i "./input.txt"
результат: Nkrru cuxrj!
6. Пот отсутствии аргумента с функцией 
node my_caesar_cli.js -s 3 -i "./input.txt" (отсутствует аргумент -m), программа выведет сообщение об ошибке
error: option -a must have meaning "encode" or "decode"
7. В случае не верно указаного пути к файлу
node my_caesar_cli.js -s 3 -a "encode" -i "./put.txt"
программа выведет сообщение об ошибке
"Invalid file path or file doesn't exist"

## Проверка кросс-чеком  
Каждый пункт **10 баллов**, частичная реализация пункта **5 баллов**.  
Каждый коммит после дедлайна (за исключением коммитов в README.md) **минус 10 баллов**  

- [x] в README.md должно быть описано, как можно запустить программу из командной строки, описаны аргументы, которые можно передать приложению  
- [x] если переданы все аргументы, приложение читает из файла и записывает в файл зашифрованный/расшифрованный текст, при этом предыдущие записи не удаляются  
- [x] action (-m --method) encode и decode работают в соответствии с описанными в задаче примерами
- [x] если не переданы обязательные аргументы, приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0 
- [x] если переданы аргументы с путями к файлам, но файлы отсутствуют (или к ним невозможен доступ), приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0  
- [x] если не передан аргумент с путем до файла на чтение, то чтение осуществляется из process.stdin  
- [x] если не передан аргумент с путем до файла на запись, то вывод осуществляется в process.stdout 
- [x] шифруются/дешифруются только латинские буквы, регистр сохраняется, остальные символы не изменяются  
- [x] если текст вводится из консоли, то программа не должна завершаться после выполнения шифровки/дешифровки введенного текста, т.е. должна быть возможность ввести еще текст  
- [x] кодовая база не находится в одном файле, а разделена на файлы в соответствии с выполняемыми задачами (например - функция, преобразующая строку, в отдельном файле, код, создающий transform стрим, в отдельном файле, функция для парсинга и валидации аргументов в отдельном файле и т.п.)
- [x] поддерживаются значения shift (-s --shift) больше, чем длина алфавита (в этом случае алфавит проходится циклически)

## Максимальное количество баллов (120 / 110).  
