
<h3>Установка TS при создании нового проекта</h3>
npm install create-react-app <имя_проекта> --template typescript

<h3>Примечания</h3>

<b>Дополнительные пакеты</b>
react-router-dom
@types/react-router-dom - чтобы TS начал воспринимать библиотеку react-router-dom

<b>Компонент TodoList</b>

Если надо сделать какие-то прараметры не обязательными (см. интерфейс в компоненте TodoList), то можно добавить знак вопроса
1. onToggle?(id: number): void,
2. onRemove?: (id: number) => void

В обрабочике события onChange и др. функции можно передать двумя способами:
1. onChange={() => onToggle(todo.id)}
2. onChange={onToggle.bind(null, todo.id)}

Во втором случае в результате использования bind возвращается новая функция, которая не вызывается сразу.

<b>Компонент TodosPage</b>

Метод confirm является методом глобального объекта window, поэтому пишем так (см.выше):
const shoudRemove = window.confirm('Вы уверены, что хотите удалить задачу?');

Если хотим обратиться к методу confirm, но не хотим обращаться к window, можно воспользоваться синтаксисом TS и записать так перед объявлением компонента:
declare var confirm: (question: string) => boolean;

А внутри компонента уже записать так:
const shoudRemove = confirm('Вы уверены, что хотите удалить задачу?');

Таким же образом можно использовать методы из сторонних библиотек.
    
    
    
