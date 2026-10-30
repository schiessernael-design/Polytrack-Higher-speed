# Higher Top Speed — PolyModLoader-Mod

Diese Mod zielt ausschließlich auf PolyTrack 0.6.2. Sie patcht den f32-Wert bei WASM-Offset `0x2F840` von `4000.0` auf `6000.0`. Im geprüften Physik-WASM ist dies der Motor-Kraftwert, der auf die angetriebenen Hinterräder angewendet wird. Das erhöht die Motorleistung um 50 %, garantiert aber keinen proportionalen Topspeed-Zuwachs.

## Mod-Dateien

- `manifest.json`: Mod-ID und Zuordnung zu PolyTrack 0.6.2
- `1.0.0/version.json`: Zielversion und Einstiegsdatei
- `1.0.0/main.mod.js`: registriert den WebAssembly-Konstanten-Patch
- `1.0.0/description.html`: Beschreibung im Mod-Menü

## Laden im PolyModLoader

1. Die Dateien in ein öffentlich erreichbares GitHub-Repository hochladen, wobei `manifest.json` im Repository-Stamm liegt.
2. Im Mod-Menü **Add** wählen und als Mod-URL die Repository-Wurzel angeben, z. B. `https://cdn.polymodloader.com/gh/DEINNAME/DEINREPO/main/`.
3. Mod auswählen, **Load** wählen und **Apply** drücken.
4. In der Entwicklerkonsole prüfen, ob PolyModLoader meldet, dass der Physics-WASM-Patch angewendet wurde.

Die Mod ist absichtlich eng an die Physikdatei von 0.6.2 gebunden. Nicht für andere Spielversionen verwenden. Nur offline testen; auf Bestenlisten/Multiplayer kann sie unfaire Ergebnisse erzeugen.
