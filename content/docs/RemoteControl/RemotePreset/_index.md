---
title: "RemoteControl.RemotePreset"
weight: 4
---

```cs
public class RemotePreset
```

Данный класс позволяет создавать патерны и менять свойства патерна "Удалённое управление".

И в дальнейшем управлять им при помощи класса `RemoteControl`

Тут только поля и флаги. Флаги в отличии от полей нет смысла менять, они нужны для понимания уже готовых патернов, созданные внутри RutonyChat.

Все флаги начинаются с `is`, например `isSoundFile` говорит о том, что в результате патерна будет звук.

Так же я разделил переменные, как и автор [rutony](https://github.com/rutony/rutonychat-testscripts/blob/489efe842a5c3e854bad2d51bce87958d6e0e4fc/TestScripts/RemoteControl.cs#L25), которые отвечают за условия запускающий паттерн, от переменных, в которых прописаны результат этих условий.

Ещё важно понимать, что логика паттерна такова, что если хотя бы 1 условие сработало, то на выходе будут все результаты.

## Поля

### Описание паттерна

Это условия, по которым срабатывают паттерны удалённого управления.

#### IndPreset

Индекс паттерна удалённого управления.

```cs
public int IndPreset = 0;
```

#### Active

Состояние паттерна, включён ли он или нет.

```cs
public bool Active = false;
```

#### Name

Имя паттерна.

```cs
public string Name = "";
```

### Условия

Тут описаны условия по которым срабатывают паттерны удалённого управления.

#### Оповещение

##### isAlertCond

Этот флаг как и остальные флаги, говорит о том, будет ли срабатывать паттерн на тот или иное условие.

```cs
public bool isAlertCond = false;
```

##### Type

Тип оповещенине, от которого будет срабатывать паттерн.

```cs
public TypeAlert Type = TypeAlert.Follower;
```

##### ViewerQty

Если например TypeAlert.Host или TypeAlert.Raid, то тут задаётся от какого количества зрителей будет срабатывать алерт.

```cs
public int ViewerQty = 0;
```

#### Сообщение в чате

##### ConditionText

Флаг

```cs
public bool ConditionText = false;
```

##### OnlySubscriber

Если `true`, то паттерн будет срабатывать только на сообщения подписчика.

```cs
public bool OnlySubscriber = false;
```

##### ChatText

Если сообщение будет содержать слово из данного параметра, то будет срабатывать паттерн.

```cs
public string ChatText = "";
```

##### CondMessage

Дополнительные условия срабатывания паттерна.

[RemoteControl](/rutonychat-docs/docs/RemoteControl/).[TypeCondMessage](/rutonychat-docs/docs/RemoteControl/#typecondmessage)

```cs
public TypeCondMessage CondMessage = TypeCondMessage.chance;
```

##### Chance

Шанс, по которым будет срабатывать паттер со сообщением

```cs
public int Chance = 100;
```

##### TextQty

Количество сообщений для срабатывания паттерна.

```cs
public int TextQty = 5;
```

#### Донат

##### isDonate

Флаг

```cs
public bool isDonate = false;
```

##### MinValue

Минимальное значение на срабатывание условия

```cs
public float MinValue = 0;
```

##### MaxValue

Максимальное значение срабатывания

```cs
public float MaxValue = 0;
```

#### Горячая клавиша

Запуск паттерна удалённого управления по горячей клавиши.

[RemoteControl](/rutonychat-docs/docs/RemoteControl/).[ModifierKeys](/rutonychat-docs/docs/RemoteControl/#modifierkeys)

##### isHotkey

Флаг

```cs
public bool isHotkey = false;
```

##### alt1

Дополнительная кнопка.

```cs
public ModifierKeys alt1 = ModifierKeys.None;
```

##### alt2

Вторая дополнительная кнопка.

```cs
public ModifierKeys alt2 = ModifierKeys.None;
```

##### KeyHotKey

Сама кнопка по которой будет срабатывать паттерн.

```cs
public System.Windows.Forms.Keys KeyHotKey = System.Windows.Forms.Keys.None;
```

#### Twitch point

Запуск паттерна от Twitch награды (они же Twitch Point и Twitch Reward).
Логика проста, если приходит ревард на 500 поинтов, то срабатывает паттерн.

##### isTwitchPoints

Флаг

```cs
public bool isTwitchPoints = false;
```

##### TwitchPointsValue

Паттер срабатывает если ревард стоит столько же, сколько прописанно в условии.

```cs
public int TwitchPointsValue = 0;
```

### Результаты паттерна

#### Нажать клавишу

```cs
public bool ConditionKey = false;
```

```cs
public string WindowName = "";
```

```cs
public bool StayPressed = false;
```

```cs
public ModifierKeys alt = ModifierKeys.None;
```

```cs
public System.Windows.Forms.Keys Key = System.Windows.Forms.Keys.F1;
```

#### Запустить программу

```cs
public bool isScript = false;
```

```cs
public string Script = "";
```

```cs
public string ScriptArguments = "";
```

#### Показать ручное оповещение

```cs
public bool isAlert = false;
```

```cs
public string AlertID = "";
```

```cs
public string AlertName = "";
```

#### Проиграть звук

```cs
public bool isSoundFile = false;
```

```cs
public string SoundFile = "";
```

```cs
public int SoundVolume = 100;
```

#### Счетчик

```cs
public bool isCounter = false;
```

```cs
public int CounterAction = 0;
```

```cs
public int CounterNumber = 0;
```

#### Выполнить скрипт

```cs
public bool isRunScript = false;
```

```cs
public string RunScriptName = "";
```

```cs
public string RunScriptParams = "";
```

#### Выполнить команду бота

```cs
public bool isRunBotCommand = false;
```

```cs
public int IndRunBotCommand = -1;
```

#### Таймер

```cs
public bool isTimer = false;
```

```cs
public int TimerOper = 0;
```

```cs
public int TimerIndex = 0;
```

```cs
public DateTime TimerEstimate = new DateTime();
```

```cs
public bool TimerRunRCPreset = false;
```

```cs
public int TimerRCPreset = -1;
```
