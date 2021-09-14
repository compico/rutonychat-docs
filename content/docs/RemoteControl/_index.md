---
title: "RemoteControl"
weight: 3
---

```cs
public static class RemoteControl
```

Данный класс позволяет управлять "Удалённое управление" из кода, менять свойства и состояние.

{{< expand "Пример">}}

```cs
// Проходим по всем имеющимся пресетам удалённого управления
RemoteControl.ListPresets.ForEach(delegate(RemoteControl.RemotePreset rp) {
    // На каждое найденный пресет - пишем название пресета в чат
    RutonyBot.SayToWindow(string.Format("Preset : {0}", rp.Name));
    // Если название пресета "TestPreset", то отключаем его
    if (rp.Name.Equals("TestPreset")) rp.Active = false;
});
```

{{< /expand >}}

## Поля

###### ListPresets

```cs
public static List<RemotePreset> ListPresets;
```

Лист со всеми пресетами.

###### isActive

```cs
public static bool isActive = false;
```

###### TypeAlert

```cs
public enum TypeAlert {
    Follower,    // Бесплатный подписчик
    Subscriber,  // Платный подписчик
    Donate,      // Донат
    Text,        // Сообщение
    HotKey,      // Горячая клавиша
    Host,        // Хост
    NewViewer,   // Новый зритель
    RankPromote, // Новый ранг
    Like,        // Лайк
    Repost,      // Репост
    Gift,        // Подарок
    Raid,        // Рейд
    Request,     // Запрос
    TwitchPoints // Twitch награды
};
```

Используется в RemotePreset.
Показывает какой тип события активирует пресет.

<!-- {{< expand "Пример">}}

{{< /expand >}} -->

###### TypeCondMessage

```cs
public enum TypeCondMessage {
    chance,      // Шанс в процентах
    qty          // Количество сообщений
};
```

Описание условий для текста

###### ModifierKeys

```cs
[Flags]
public enum ModifierKeys : uint {
    None = 0,
    Alt = 1,
    Control = 2,
    Shift = 4,
    Win = 8
}
```

## Методы

###### CheckPresets

```cs
public static void CheckPresets(RemotePreset preset, string var_nickname = "", string var_text = "", float var_value = 0) { }
```

###### RunProgram

```cs
public static void RunProgram(RemotePreset preset, string var_nickname = "", string var_text = "", float var_value = 0, string var_donor = "") { }
```

###### PressKey

```cs
public static void PressKey(RemotePreset preset) { }
```

###### PlaySound

```cs
public static void PlaySound(RemotePreset preset) { }
```

###### ShowCustomAlert

```cs
public static void ShowCustomAlert(RemotePreset preset, string var_nick, string var_donate = "", string var_text = "") { }
```

###### UpdateCounter

```cs
public static void UpdateCounter(int vnumber, int vvalue) { }
```

###### RunTimerOper

```cs
public static void RunTimerOper(RemotePreset preset) { }
```

###### RunBotCommand

```cs
public static void RunBotCommand(RemotePreset preset, string var_username, float var_value) { }
```

###### RunScript

```cs
public static void RunScript(RemotePreset preset, string var_username, float var_value = 0) { }
```
