/**
 * Created by Chesire on 12.11.2016.
 */
/**
 * Beispiel für eine simple A-Frame Komponente
 */
AFRAME.aframeCore.registerComponent('randomator', {
    schema: {
        threshold: {default: 1.0},
        nervous: {default: false}
    },

    /**
     * Wird einmalig aufgerufen, sobald die Komponente an ein Objekt gebunden wird.
     * Verwende diese Methode für das initiale Setup.
     */
    init: function () {
        if (this.data.nervous) {
            this.el.sceneEl.addBehavior(this);
        }
    },

    /**
     * Wird erstmalig aufgerufen, wenn die Komponente an ein Objekt gebunden wird
     * (nach der init-Methode) und dann jedes Mal, wenn die Eigenschaften verändert
     * werden ODER (falls eingestellt) bei jedem Frame.
     *
     * In der Regel wird in dieser Methode basierend auf den gegebenen Daten das
     * Objekt verändert oder neue Objekte hinzugefügt.
     */
    update: function () {
        var obj = this.el.object3D;
        var th = this.data.threshold;

        var x = Math.random() * th;
        var y = Math.random() * th;
        var z = Math.random() * th;

        obj.position.set(x, y, z);
    },

    /**
     * Wird einmalig aufgerufen, sobald die Komponente aus der Szene entfernt wurde
     * (z.B. durch removeAttribute). Hier solltest du alle Änderungen am Objekt
     * wieder rückgängig machen.
     */
    remove: function () {
    }
});